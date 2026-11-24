import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UserAgent = {
  PrismaWebhooks1: "Prisma-Webhooks/1",
} as const;
export type UserAgent = (typeof UserAgent)[keyof typeof UserAgent] | (string & {});

export const userAgentSchema: EnumSchema<UserAgent> = s.enumOf<UserAgent>(UserAgent);
