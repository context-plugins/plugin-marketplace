import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";
import { recurringPlanResourceSchema, type RecurringPlanResource } from "./recurring-plan-resource.js";

export type V1PlansResponse = {
  data: RecurringPlanResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1PlansResponseProperties: s.Shape<V1PlansResponse> = {
  data: s.array(s.lazy(() => recurringPlanResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1PlansResponseInternalSchema: Schema<V1PlansResponse> = s.object<V1PlansResponse>(
  v1PlansResponseProperties,
  { additionalProperties: s.json() },
);

export const v1PlansResponseSchema: Schema<V1PlansResponse> = s.lazySchema(() =>
  s.object<V1PlansResponse>(
    {
      ...v1PlansResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
