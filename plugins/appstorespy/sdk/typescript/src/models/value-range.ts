import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gteSchema, type Gte } from "./unions/gte.js";
import { lteSchema, type Lte } from "./unions/lte.js";

export type ValueRange = {
  lte?: Lte;
  gte?: Gte;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueRangeSchema: Schema<ValueRange> = s.object<ValueRange>(
  {
    lte: s.optional(s.lazy(() => lteSchema)),
    gte: s.optional(s.lazy(() => gteSchema)),
  },
  { additionalProperties: s.json() },
);
