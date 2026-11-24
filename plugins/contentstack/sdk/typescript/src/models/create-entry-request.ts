import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for creating a new entry. */
export type CreateEntryRequest = {
  /** Entry field values conforming to the content type schema. */
  entry: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createEntryRequestSchema: Schema<CreateEntryRequest> = s.object<CreateEntryRequest>(
  {
    entry: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
