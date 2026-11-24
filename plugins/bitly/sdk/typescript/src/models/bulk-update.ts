import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BulkUpdate = {
  links?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkUpdateSchema: Schema<BulkUpdate> = s.object<BulkUpdate>(
  {
    links: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
