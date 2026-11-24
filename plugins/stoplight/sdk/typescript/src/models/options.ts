import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Options = {
  /** Default: false. */
  removeExtraEndpoints?: boolean;
  /** Default: false. */
  removeExtraSchemas?: boolean;
  /** Default: false. */
  removeExtraTextSections?: boolean;
  /** Default: false. */
  removeExtraTraits?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optionsSchema: Schema<Options> = s.object<Options>(
  {
    removeExtraEndpoints: s.optional(s.boolean()),
    removeExtraSchemas: s.optional(s.boolean()),
    removeExtraTextSections: s.optional(s.boolean()),
    removeExtraTraits: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
