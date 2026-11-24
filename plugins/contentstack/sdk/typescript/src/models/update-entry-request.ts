import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for updating an entry. */
export type UpdateEntryRequest = {
  /** Updated field values for the entry. */
  entry: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateEntryRequestSchema: Schema<UpdateEntryRequest> = s.object<UpdateEntryRequest>(
  {
    entry: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
