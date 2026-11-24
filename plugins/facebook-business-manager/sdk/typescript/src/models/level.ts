import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Level = {
  Account: "account",
  Campaign: "campaign",
  Adset: "adset",
  Ad: "ad",
} as const;
export type Level = (typeof Level)[keyof typeof Level] | (string & {});

export const levelSchema: EnumSchema<Level> = s.enumOf<Level>(Level);
