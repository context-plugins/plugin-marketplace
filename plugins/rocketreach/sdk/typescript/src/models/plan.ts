import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Plan = {
  /** RocketReach internal unique plan ID */
  id?: number;
  /** Name of the plan */
  name?: string;
  /** Maximum number of lookups for the plan */
  lookupLimit?: number;
  /** Maximum number of exports for the plan */
  exportLimit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const planProperties: s.Shape<Plan> = {
  id: s.optional(s.int()),
  name: s.optional(s.string()),
  lookupLimit: s.optional(s.int()),
  exportLimit: s.optional(s.int()),
  _keysMap: {
    lookupLimit: "lookup_limit",
    exportLimit: "export_limit",
  },
};

export const planInternalSchema: Schema<Plan> = s.object<Plan>(planProperties, {
  additionalProperties: s.json(),
});

export const planSchema: Schema<Plan> = s.lazySchema(() =>
  s.object<Plan>(
    {
      ...planProperties,
      id: s.optional(s.int().check(s.gte(-2147483648), s.lte(2147483647))),
      name: s.optional(s.string().check(s.maxLength(64))),
    },
    { additionalProperties: s.json() },
  ),
);
