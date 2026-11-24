import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EntryModel = {
  fullUrl?: string;
  resource?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entryModelSchema: Schema<EntryModel> = s.object<EntryModel>(
  {
    fullUrl: s.optional(s.string()),
    resource: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
