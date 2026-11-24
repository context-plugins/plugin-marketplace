import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The strategy used to conduct the migration. CREATE_NEW - Creates a new Amazon Lex V2 bot and
 * migrates the Amazon Lex V1 bot to the new bot. UPDATE_EXISTING - Overwrites the existing Amazon
 * Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the
 * Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot.
 */
export const MigrationStrategy = {
  CreateNew: "CREATE_NEW",
  UpdateExisting: "UPDATE_EXISTING",
} as const;
export type MigrationStrategy = (typeof MigrationStrategy)[keyof typeof MigrationStrategy] | (string & {});

export const migrationStrategySchema: EnumSchema<MigrationStrategy> =
  s.enumOf<MigrationStrategy>(MigrationStrategy);
