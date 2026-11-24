import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item42InternalSchema, item42Schema, type Item42 } from "./unions/item42.js";

export type Config = {
  getStartedPayload?: string;
  composerInputDisabled?: boolean;
  items?: Item42[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const configProperties: s.Shape<Config> = {
  getStartedPayload: s.optional(s.string()),
  composerInputDisabled: s.optional(s.boolean()),
  items: s.optional(s.array(s.lazy(() => item42InternalSchema))),
};

export const configInternalSchema: Schema<Config> = s.object<Config>(configProperties, {
  additionalProperties: s.json(),
});

export const configSchema: Schema<Config> = s.lazySchema(() =>
  s.object<Config>(
    {
      ...configProperties,
      getStartedPayload: s.optional(s.string().check(s.minLength(1), s.maxLength(1000))),
      items: s.optional(s.array(s.lazy(() => item42Schema)).check(s.maxLength(3))),
    },
    { additionalProperties: s.json() },
  ),
);
