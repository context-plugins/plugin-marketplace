import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

export type ContentDuration = {
  /** Positive duration amount. */
  amount: number;
  /** Duration unit. */
  unit: Unit;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentDurationProperties: s.Shape<ContentDuration> = {
  amount: s.int(),
  unit: unitSchema,
};

export const contentDurationInternalSchema: Schema<ContentDuration> = s.object<ContentDuration>(
  contentDurationProperties,
  { additionalProperties: s.json() },
);

export const contentDurationSchema: Schema<ContentDuration> = s.lazySchema(() =>
  s.object<ContentDuration>(
    {
      ...contentDurationProperties,
      amount: s.int().check(s.gt(0)),
    },
    { additionalProperties: s.json() },
  ),
);
