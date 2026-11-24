import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { header2Schema, type Header2 } from "./header2.js";

/** Wraps the Header object. */
export type HeaderOverride = {
  /**
   * Header embodying a key and a value. Do not put business sensitive or personally identifying
   * data in the HTTP Header Override Configuration or other similar fields in accordance with
   * Section 12 (Resource Fields) of the [Service Specific
   * Terms](https://cloud.google.com/terms/service-terms).
   */
  header?: Header2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const headerOverrideSchema: Schema<HeaderOverride> = s.object<HeaderOverride>(
  {
    header: s.optional(s.lazy(() => header2Schema)),
  },
  { additionalProperties: s.json() },
);
