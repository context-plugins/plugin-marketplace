import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The field to sort the list of migrations by. You can sort by the Amazon Lex V1 bot name or the
 * date and time that the migration was started.
 */
export const SortByAttribute = {
  V1BotName: "V1_BOT_NAME",
  MigrationDateTime: "MIGRATION_DATE_TIME",
} as const;
export type SortByAttribute = (typeof SortByAttribute)[keyof typeof SortByAttribute] | (string & {});

export const sortByAttributeSchema: EnumSchema<SortByAttribute> = s.enumOf<SortByAttribute>(SortByAttribute);
