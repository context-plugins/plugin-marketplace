import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { principalInternalSchema, principalSchema, type Principal } from "./principal.js";

export type Resolved = {
  phrase: string;
  principal: Principal;
  confidence: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const resolvedProperties: s.Shape<Resolved> = {
  phrase: s.string(),
  principal: principalInternalSchema,
  confidence: s.float64(),
};

export const resolvedInternalSchema: Schema<Resolved> = s.object<Resolved>(resolvedProperties, {
  additionalProperties: s.json(),
});

export const resolvedSchema: Schema<Resolved> = s.lazySchema(() =>
  s.object<Resolved>(
    {
      ...resolvedProperties,
      principal: principalSchema,
      confidence: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
