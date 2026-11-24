import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Header embodying a key and a value. Do not put business sensitive or personally identifying data
 * in the HTTP Header Override Configuration or other similar fields in accordance with Section 12
 * (Resource Fields) of the [Service Specific Terms](https://cloud.google.com/terms/service-terms).
 */
export type Header2 = {
  /** The Value of the header. */
  value?: string;
  /** The Key of the header. */
  key?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const header2Schema: Schema<Header2> = s.object<Header2>(
  {
    value: s.optional(s.string()),
    key: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
