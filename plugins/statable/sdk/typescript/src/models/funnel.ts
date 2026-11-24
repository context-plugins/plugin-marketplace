import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  scopeStatableStatsSitesApiSchema,
  type ScopeStatableStatsSitesApi,
} from "./scope-statable-stats-sites-api.js";

export type Funnel = {
  id?: number;
  name?: string;
  scope?: ScopeStatableStatsSitesApi;
  strictOrder?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const funnelSchema: Schema<Funnel> = s.object<Funnel>(
  {
    id: s.optional(s.int()),
    name: s.optional(s.string()),
    scope: s.optional(s.lazy(() => scopeStatableStatsSitesApiSchema)),
    strictOrder: s.optional(s.boolean()),
    _keysMap: {
      strictOrder: "strict_order",
    },
  },
  { additionalProperties: s.json() },
);
