import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";
import { payoutResourceSchema, type PayoutResource } from "./payout-resource.js";

export type V1PayoutsResponse = {
  data: PayoutResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1PayoutsResponseProperties: s.Shape<V1PayoutsResponse> = {
  data: s.array(s.lazy(() => payoutResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1PayoutsResponseInternalSchema: Schema<V1PayoutsResponse> = s.object<V1PayoutsResponse>(
  v1PayoutsResponseProperties,
  { additionalProperties: s.json() },
);

export const v1PayoutsResponseSchema: Schema<V1PayoutsResponse> = s.lazySchema(() =>
  s.object<V1PayoutsResponse>(
    {
      ...v1PayoutsResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
