import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { planSchema, type Plan } from "./plan.js";
import { upgradeInternalSchema, upgradeSchema, type Upgrade } from "./upgrade.js";
import { usageSchema, type Usage } from "./usage.js";

export type Data = {
  plan?: Plan;
  usage?: Usage;
  rateLimitPerMinute?: number;
  upgrade?: Upgrade | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataProperties: s.Shape<Data> = {
  plan: s.optional(s.lazy(() => planSchema)),
  usage: s.optional(s.lazy(() => usageSchema)),
  rateLimitPerMinute: s.optional(s.int()),
  upgrade: s.optionalNullable(s.lazy(() => upgradeInternalSchema)),
};

export const dataInternalSchema: Schema<Data> = s.object<Data>(dataProperties, {
  additionalProperties: s.json(),
});

export const dataSchema: Schema<Data> = s.lazySchema(() =>
  s.object<Data>(
    {
      ...dataProperties,
      upgrade: s.optionalNullable(s.lazy(() => upgradeSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
