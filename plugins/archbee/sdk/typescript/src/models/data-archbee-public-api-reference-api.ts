import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataArchbeePublicApiReferenceApi = {
  result?: string;
  importedContent?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataArchbeePublicApiReferenceApiSchema: Schema<DataArchbeePublicApiReferenceApi> =
  s.object<DataArchbeePublicApiReferenceApi>(
    {
      result: s.optional(s.string()),
      importedContent: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
