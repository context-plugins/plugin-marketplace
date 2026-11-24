import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MetaBasesTablesRequest = {
  /** The new name for the table. */
  name?: string;
  /** The new description for the table. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaBasesTablesRequestSchema: Schema<MetaBasesTablesRequest> = s.object<MetaBasesTablesRequest>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
