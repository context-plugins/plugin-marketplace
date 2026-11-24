import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name of the field to filter the list of bots. */
export const Name24 = {
  BotName: "BotName",
  BotType: "BotType",
} as const;
export type Name24 = (typeof Name24)[keyof typeof Name24] | (string & {});

export const name24Schema: EnumSchema<Name24> = s.enumOf<Name24>(Name24);
