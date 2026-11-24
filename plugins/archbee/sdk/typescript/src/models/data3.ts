import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data3 = {
  /** Created Doc id (first doc in case of archive tree). */
  docId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data3Schema: Schema<Data3> = s.object<Data3>(
  {
    docId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
