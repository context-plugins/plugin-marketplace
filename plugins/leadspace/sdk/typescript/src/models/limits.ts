import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Limits = {
  /** Max leads retrieved per expanded account @default 10 */
  resultPerAccount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const limitsProperties: s.Shape<Limits> = {
  resultPerAccount: s.defaulted(s.int(), 10),
};

export const limitsInternalSchema: Schema<Limits> = s.object<Limits>(limitsProperties, {
  additionalProperties: s.json(),
});

export const limitsSchema: Schema<Limits> = s.lazySchema(() =>
  s.object<Limits>(
    {
      ...limitsProperties,
      resultPerAccount: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 10),
    },
    { additionalProperties: s.json() },
  ),
);
