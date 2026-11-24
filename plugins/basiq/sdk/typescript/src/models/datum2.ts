import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum2 = {
  /** Application-specific error code, expressed as a string value. @default "resource-not-found" */
  code?: "resource-not-found";
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** Title of the error */
  title?: string;
  /** Type of the response, always "error" */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum2Schema: Schema<Datum2> = s.object<Datum2>(
  {
    code: s.defaulted(s.literal("resource-not-found"), "resource-not-found"),
    detail: s.optional(s.string()),
    title: s.optional(s.string()),
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
