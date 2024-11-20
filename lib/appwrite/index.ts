import {Account, Avatars, Client, Databases, Storage} from "appwrite";
import {appWriteConfig} from "@/lib/appwrite/config";
import {cookies} from "next/headers";

export const createSessionClient = async () => {
    const client = new Client()
        .setEndpoint(appWriteConfig.endpoint)
        .setProject(appWriteConfig.projectId);

    const session = (await cookies()).get('appwrite-session');

    if (!session || !session.value) throw new Error('No session');

    client.setSession(session.value);

    return {
        get account() {
            return new Account(client);
        },
        get database() {
            return new Databases(client);
        }
    };
};

export const createAdminClient = async () => {
    const client = new Client()
        .setEndpoint(appWriteConfig.endpoint)
        .setProject(appWriteConfig.projectId)
        .setJWT(appWriteConfig.secretKey);

    return {
        get account() {
            return new Account(client);
        },
        get database() {
            return new Databases(client);
        },
        get storage() {
            return new Storage(client);
        },
        get avatars() {
            return new Avatars(client);
        }
    };

};