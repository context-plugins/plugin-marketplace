import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { item3Schema, type Item3 } from "./item3.js";
import { setSchema, type Set } from "./set.js";
import { totalsSchema, type Totals } from "./totals.js";

export type V1PsaSetResponse = {
  set?: Set;
  totalCards?: number;
  totals?: Totals;
  items?: Item3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PsaSetResponseSchema: Schema<V1PsaSetResponse> = s.object<V1PsaSetResponse>(
  {
    set: s.optional(s.lazy(() => setSchema)),
    totalCards: s.optional(s.int()),
    totals: s.optional(s.lazy(() => totalsSchema)),
    items: s.optional(s.array(s.lazy(() => item3Schema))),
  },
  { additionalProperties: s.json() },
);
