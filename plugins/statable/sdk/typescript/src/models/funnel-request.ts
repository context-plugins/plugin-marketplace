import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { funnelStepSchema, type FunnelStep } from "./funnel-step.js";
import {
  ScopeStatableStatsSitesApi,
  scopeStatableStatsSitesApiSchema,
} from "./scope-statable-stats-sites-api.js";

export type FunnelRequest = {
  name: string;
  steps: FunnelStep[];
  /** @default ScopeStatableStatsSitesApi.Visitor */
  scope?: ScopeStatableStatsSitesApi;
  strictOrder?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const funnelRequestProperties: s.Shape<FunnelRequest> = {
  name: s.string(),
  steps: s.array(s.lazy(() => funnelStepSchema)),
  scope: s.defaulted(scopeStatableStatsSitesApiSchema, ScopeStatableStatsSitesApi.Visitor),
  strictOrder: s.optional(s.boolean()),
  _keysMap: {
    strictOrder: "strict_order",
  },
};

export const funnelRequestInternalSchema: Schema<FunnelRequest> = s.object<FunnelRequest>(
  funnelRequestProperties,
  { additionalProperties: s.json() },
);

export const funnelRequestSchema: Schema<FunnelRequest> = s.lazySchema(() =>
  s.object<FunnelRequest>(
    {
      ...funnelRequestProperties,
      steps: s.array(s.lazy(() => funnelStepSchema)).check(s.minLength(2)),
    },
    { additionalProperties: s.json() },
  ),
);
