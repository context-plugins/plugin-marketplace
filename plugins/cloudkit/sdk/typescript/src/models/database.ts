import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Database = {
  Public: "public",
  Private: "private",
  Shared: "shared",
} as const;
export type Database = (typeof Database)[keyof typeof Database] | (string & {});

export const databaseSchema: EnumSchema<Database> = s.enumOf<Database>(Database);
