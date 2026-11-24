import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Confirmation that a record was deleted. */
export type RecordDeleted = {
  /** The ID of the deleted record. */
  id: string;
  /** Always true when the deletion succeeds. */
  deleted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordDeletedSchema: Schema<RecordDeleted> = s.object<RecordDeleted>(
  {
    id: s.string(),
    deleted: s.boolean(),
  },
  { additionalProperties: s.json() },
);
