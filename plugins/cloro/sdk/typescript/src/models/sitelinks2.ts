import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inline1Schema, type Inline1 } from "./inline1.js";

/** Sitelinks displayed under the main result */
export type Sitelinks2 = {
  /** Inline sitelinks */
  inline?: Inline1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sitelinks2Schema: Schema<Sitelinks2> = s.object<Sitelinks2>(
  {
    inline: s.optional(s.array(s.lazy(() => inline1Schema))),
  },
  { additionalProperties: s.json() },
);
