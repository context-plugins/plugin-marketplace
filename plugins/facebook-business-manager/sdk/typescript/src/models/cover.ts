import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The Page cover photo */
export type Cover = {
  id?: string;
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const coverProperties: s.Shape<Cover> = {
  id: s.optional(s.string()),
  source: s.optional(s.string()),
};

export const coverInternalSchema: Schema<Cover> = s.object<Cover>(coverProperties, {
  additionalProperties: s.json(),
});

export const coverSchema: Schema<Cover> = s.lazySchema(() =>
  s.object<Cover>(
    {
      ...coverProperties,
      source: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
