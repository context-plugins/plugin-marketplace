import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemTypeSchema, type ItemType } from "./item-type.js";

export type Query1 = {
  q: string;
  /** Optional filter mapping to an Agent Ready corpus type. 'any' (default) searches everything. */
  itemType?: ItemType;
  site?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const query1Properties: s.Shape<Query1> = {
  q: s.string(),
  itemType: s.optional(s.lazy(() => itemTypeSchema)),
  site: s.optional(s.string()),
};

export const query1InternalSchema: Schema<Query1> = s.object<Query1>(query1Properties, {
  additionalProperties: s.json(),
});

export const query1Schema: Schema<Query1> = s.lazySchema(() =>
  s.object<Query1>(
    {
      ...query1Properties,
      q: s.string().check(s.minLength(1), s.maxLength(2000)),
    },
    { additionalProperties: s.json() },
  ),
);
