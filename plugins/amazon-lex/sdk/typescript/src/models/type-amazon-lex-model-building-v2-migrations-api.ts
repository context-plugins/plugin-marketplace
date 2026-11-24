import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of alert. There are two kinds of alerts: ERROR - There was an issue with the migration
 * that can't be resolved. The migration stops. WARN - There was an issue with the migration that
 * requires manual changes to the new Amazon Lex V2 bot. The migration continues.
 */
export const TypeAmazonLexModelBuildingV2MigrationsApi = {
  Error: "ERROR",
  Warn: "WARN",
} as const;
export type TypeAmazonLexModelBuildingV2MigrationsApi =
  | (typeof TypeAmazonLexModelBuildingV2MigrationsApi)[keyof typeof TypeAmazonLexModelBuildingV2MigrationsApi]
  | (string & {});

export const typeAmazonLexModelBuildingV2MigrationsApiSchema: EnumSchema<TypeAmazonLexModelBuildingV2MigrationsApi> =
  s.enumOf<TypeAmazonLexModelBuildingV2MigrationsApi>(TypeAmazonLexModelBuildingV2MigrationsApi);
