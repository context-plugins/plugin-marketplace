import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Audience = {
  User: "user",
  Assistant: "assistant",
} as const;
export type Audience = (typeof Audience)[keyof typeof Audience] | (string & {});

export const audienceSchema: EnumSchema<Audience> = s.enumOf<Audience>(Audience);
