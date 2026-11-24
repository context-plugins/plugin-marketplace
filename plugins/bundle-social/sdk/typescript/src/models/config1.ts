import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { iceBreakerInternalSchema, iceBreakerSchema, type IceBreaker } from "./ice-breaker.js";

export type Config1 = {
  iceBreakers?: IceBreaker[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const config1Properties: s.Shape<Config1> = {
  iceBreakers: s.optional(s.array(s.lazy(() => iceBreakerInternalSchema))),
};

export const config1InternalSchema: Schema<Config1> = s.object<Config1>(config1Properties, {
  additionalProperties: s.json(),
});

export const config1Schema: Schema<Config1> = s.lazySchema(() =>
  s.object<Config1>(
    {
      ...config1Properties,
      iceBreakers: s.optional(s.array(s.lazy(() => iceBreakerSchema)).check(s.maxLength(4))),
    },
    { additionalProperties: s.json() },
  ),
);
