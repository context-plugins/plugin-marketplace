import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { funnelStepSchema, type FunnelStep } from "./funnel-step.js";
import {
  scopeStatableStatsSitesApiSchema,
  type ScopeStatableStatsSitesApi,
} from "./scope-statable-stats-sites-api.js";

/** A saved funnel definition (managed in the dashboard). */
export type FunnelDefinition = {
  id?: number;
  siteId?: number;
  name?: string;
  scope?: ScopeStatableStatsSitesApi;
  /** When true, steps must occur in exact order (windowFunnel strict_order). */
  strictOrder?: boolean;
  steps?: FunnelStep[];
  createdAt?: Date;
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const funnelDefinitionSchema: Schema<FunnelDefinition> = s.object<FunnelDefinition>(
  {
    id: s.optional(s.int()),
    siteId: s.optional(s.int()),
    name: s.optional(s.string()),
    scope: s.optional(s.lazy(() => scopeStatableStatsSitesApiSchema)),
    strictOrder: s.optional(s.boolean()),
    steps: s.optional(s.array(s.lazy(() => funnelStepSchema))),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    _keysMap: {
      siteId: "site_id",
      strictOrder: "strict_order",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
