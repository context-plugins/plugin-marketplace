import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Object representing the user's plan */
export type Plan2 = {
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

const plan2Properties: s.Shape<Plan2> = {
  id: s.optional(s.int()),
  name: s.optional(s.string()),
  lookupLimit: s.optional(s.int()),
  exportLimit: s.optional(s.int()),
  _keysMap: {
    lookupLimit: "lookup_limit",
    exportLimit: "export_limit",
  },
};

export const plan2InternalSchema: Schema<Plan2> = s.object<Plan2>(plan2Properties, {
  additionalProperties: s.json(),
});

export const plan2Schema: Schema<Plan2> = s.lazySchema(() =>
  s.object<Plan2>(
    {
      ...plan2Properties,
      id: s.optional(s.int().check(s.gte(-2147483648), s.lte(2147483647))),
      name: s.optional(s.string().check(s.maxLength(64))),
    },
    { additionalProperties: s.json() },
  ),
);
