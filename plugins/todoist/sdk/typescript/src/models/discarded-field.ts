import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { discardedFieldNameSchema, type DiscardedFieldName } from "./discarded-field-name.js";
import { discardedFieldReasonSchema, type DiscardedFieldReason } from "./discarded-field-reason.js";

/** A task property the importer dropped, and the plan that excluded it. */
export type DiscardedField = {
  /** The task property that was dropped. */
  field: DiscardedFieldName;
  /** Which plan excluded the property, and so which one has to change to keep it. */
  reason: DiscardedFieldReason;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const discardedFieldSchema: Schema<DiscardedField> = s.object<DiscardedField>(
  {
    field: discardedFieldNameSchema,
    reason: discardedFieldReasonSchema,
  },
  { additionalProperties: s.json() },
);
