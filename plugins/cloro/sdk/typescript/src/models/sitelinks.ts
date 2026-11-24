import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { inlineSchema, type Inline } from "./inline.js";

/** Sitelinks displayed under the main result */
export type Sitelinks = {
  /** Inline sitelinks */
  inline?: Inline[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sitelinksSchema: Schema<Sitelinks> = s.object<Sitelinks>(
  {
    inline: s.optional(s.array(s.lazy(() => inlineSchema))),
  },
  { additionalProperties: s.json() },
);
