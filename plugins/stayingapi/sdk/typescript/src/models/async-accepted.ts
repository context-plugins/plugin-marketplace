import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { meta1Schema, type Meta1 } from "./meta1.js";

/**
 * Returned (202) when projected runtime exceeds the 8s async threshold. Poll pollUrl until
 * terminal. A Retry-After header hints the back-off.
 */
export type AsyncAccepted = {
  data: Data;
  meta: Meta1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asyncAcceptedSchema: Schema<AsyncAccepted> = s.object<AsyncAccepted>(
  {
    data: dataSchema,
    meta: meta1Schema,
  },
  { additionalProperties: s.json() },
);
