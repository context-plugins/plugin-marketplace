import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetaBasesTablesFieldsFieldIdRequest = {
  /** The new name for the field. */
  name?: string;
  /** The new description for the field. */
  description?: string;
  /** Updated configuration options for the field. */
  options?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaBasesTablesFieldsFieldIdRequestSchema: Schema<MetaBasesTablesFieldsFieldIdRequest> =
  s.object<MetaBasesTablesFieldsFieldIdRequest>(
    {
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      options: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
