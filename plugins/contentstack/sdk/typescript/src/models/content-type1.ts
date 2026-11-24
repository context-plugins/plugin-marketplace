import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { field2Schema, type Field2 } from "./field2.js";

export type ContentType1 = {
  /** Unique identifier for the content type. */
  uid: string;
  /** Display name of the content type. */
  title: string;
  /** Array of field definitions. */
  schema: Field2[];
  /** Configuration options for the content type. */
  options?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentType1Schema: Schema<ContentType1> = s.object<ContentType1>(
  {
    uid: s.string(),
    title: s.string(),
    schema: s.array(s.lazy(() => field2Schema)),
    options: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
