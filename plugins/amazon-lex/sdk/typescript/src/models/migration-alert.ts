import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeAmazonLexModelBuildingV2MigrationsApiSchema,
  type TypeAmazonLexModelBuildingV2MigrationsApi,
} from "./type-amazon-lex-model-building-v2-migrations-api.js";

export type MigrationAlert = {
  /**
   * The type of alert. There are two kinds of alerts: ERROR - There was an issue with the migration
   * that can't be resolved. The migration stops. WARN - There was an issue with the migration that
   * requires manual changes to the new Amazon Lex V2 bot. The migration continues.
   */
  type?: TypeAmazonLexModelBuildingV2MigrationsApi;
  /** A message that describes why the alert was issued. */
  message?: string;
  /** Additional details about the alert. */
  details?: string[];
  /** A link to the Amazon Lex documentation that describes how to resolve the alert. */
  referenceUrLs?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const migrationAlertSchema: Schema<MigrationAlert> = s.object<MigrationAlert>(
  {
    type: s.optional(s.lazy(() => typeAmazonLexModelBuildingV2MigrationsApiSchema)),
    message: s.optional(s.string()),
    details: s.optional(s.array(s.string())),
    referenceUrLs: s.optional(s.array(s.string())),
    _keysMap: {
      referenceUrLs: "referenceURLs",
    },
  },
  { additionalProperties: s.json() },
);
