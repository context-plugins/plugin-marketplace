import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChangedTablesById = {
  changedRecordsById?: Record<string, unknown>;
  createdRecordsById?: Record<string, unknown>;
  destroyedRecordIds?: string[];
  changedFieldsById?: Record<string, unknown>;
  createdFieldsById?: Record<string, unknown>;
  destroyedFieldIds?: string[];
  changedViewsById?: Record<string, unknown>;
  createdViewsById?: Record<string, unknown>;
  destroyedViewIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changedTablesByIdSchema: Schema<ChangedTablesById> = s.object<ChangedTablesById>(
  {
    changedRecordsById: s.optional(s.record(s.string(), s.unknown())),
    createdRecordsById: s.optional(s.record(s.string(), s.unknown())),
    destroyedRecordIds: s.optional(s.array(s.string())),
    changedFieldsById: s.optional(s.record(s.string(), s.unknown())),
    createdFieldsById: s.optional(s.record(s.string(), s.unknown())),
    destroyedFieldIds: s.optional(s.array(s.string())),
    changedViewsById: s.optional(s.record(s.string(), s.unknown())),
    createdViewsById: s.optional(s.record(s.string(), s.unknown())),
    destroyedViewIds: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
