import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source = {
  /** ID of the contributing source system. */
  sourceId?: string;
  /** ID of the record in the source system. */
  recordId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceSchema: Schema<Source> = s.object<Source>(
  {
    sourceId: s.optional(s.string()),
    recordId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
