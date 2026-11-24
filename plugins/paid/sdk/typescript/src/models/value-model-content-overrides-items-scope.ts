import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueModelContentOverridesItemsScope = {
  customerIds?: string[];
  customerGroupIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueModelContentOverridesItemsScopeSchema: Schema<ValueModelContentOverridesItemsScope> =
  s.object<ValueModelContentOverridesItemsScope>(
    {
      customerIds: s.optional(s.array(s.string())),
      customerGroupIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
