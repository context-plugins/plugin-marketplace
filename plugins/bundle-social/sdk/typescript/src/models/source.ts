import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Source = {
  PrivateReply: "PRIVATE_REPLY",
  Dm: "DM",
  Webhook: "WEBHOOK",
  Api: "API",
  Echo: "ECHO",
} as const;
export type Source = (typeof Source)[keyof typeof Source] | (string & {});

export const sourceSchema: EnumSchema<Source> = s.enumOf<Source>(Source);
