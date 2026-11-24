import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";
import { datumSchema, type Datum } from "./unions/datum.js";

export type LeadSearchResponse = {
  /** @default "True" */
  status?: "True";
  type: Type;
  count: number;
  /** Lead records. Available fields depend on the requested inventory type and source data. */
  data: Datum[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const leadSearchResponseProperties: s.Shape<LeadSearchResponse> = {
  status: s.defaulted(s.literal("True"), "True"),
  type: typeSchema,
  count: s.int(),
  data: s.array(s.lazy(() => datumSchema)),
};

export const leadSearchResponseInternalSchema: Schema<LeadSearchResponse> = s.object<LeadSearchResponse>(
  leadSearchResponseProperties,
  { additionalProperties: s.json() },
);

export const leadSearchResponseSchema: Schema<LeadSearchResponse> = s.lazySchema(() =>
  s.object<LeadSearchResponse>(
    {
      ...leadSearchResponseProperties,
      count: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
