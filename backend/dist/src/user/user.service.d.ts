import { Entry } from "ldapts";
import { AuthSignInDTO } from "src/auth/dto/authSignIn.dto";
import { EmailService } from "src/email/email.service";
import { PrismaService } from "src/prisma/prisma.service";
import { ConfigService } from "../config/config.service";
import { FileService } from "../file/file.service";
import { CreateUserDTO } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
export declare class UserSevice {
    private prisma;
    private emailService;
    private fileService;
    private configService;
    private readonly logger;
    constructor(prisma: PrismaService, emailService: EmailService, fileService: FileService, configService: ConfigService);
    list(): Promise<{
        updatedAt: Date;
        email: string;
        username: string;
        password: string | null;
        id: string;
        createdAt: Date;
        isAdmin: boolean;
        ldapDN: string | null;
        totpEnabled: boolean;
        totpVerified: boolean;
        totpSecret: string | null;
    }[]>;
    get(id: string): Promise<{
        updatedAt: Date;
        email: string;
        username: string;
        password: string | null;
        id: string;
        createdAt: Date;
        isAdmin: boolean;
        ldapDN: string | null;
        totpEnabled: boolean;
        totpVerified: boolean;
        totpSecret: string | null;
    }>;
    create(dto: CreateUserDTO): Promise<{
        updatedAt: Date;
        email: string;
        username: string;
        password: string | null;
        id: string;
        createdAt: Date;
        isAdmin: boolean;
        ldapDN: string | null;
        totpEnabled: boolean;
        totpVerified: boolean;
        totpSecret: string | null;
    }>;
    update(id: string, user: UpdateUserDto): Promise<{
        updatedAt: Date;
        email: string;
        username: string;
        password: string | null;
        id: string;
        createdAt: Date;
        isAdmin: boolean;
        ldapDN: string | null;
        totpEnabled: boolean;
        totpVerified: boolean;
        totpSecret: string | null;
    }>;
    delete(id: string): Promise<{
        updatedAt: Date;
        email: string;
        username: string;
        password: string | null;
        id: string;
        createdAt: Date;
        isAdmin: boolean;
        ldapDN: string | null;
        totpEnabled: boolean;
        totpVerified: boolean;
        totpSecret: string | null;
    }>;
    findOrCreateFromLDAP(providedCredentials: AuthSignInDTO, ldapEntry: Entry): Promise<{
        updatedAt: Date;
        email: string;
        username: string;
        password: string | null;
        id: string;
        createdAt: Date;
        isAdmin: boolean;
        ldapDN: string | null;
        totpEnabled: boolean;
        totpVerified: boolean;
        totpSecret: string | null;
    }>;
}
