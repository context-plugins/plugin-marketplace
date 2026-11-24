import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemTypeSchema, type ItemType } from "./item-type.js";

export type Query = {
  text: string;
  q?: string;
  /** Optional filter mapping to an Agent Ready corpus type. 'any' (default) searches everything. */
  itemType?: ItemType;
  site?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const queryProperties: s.Shape<Query> = {
  text: s.string(),
  q: s.optional(s.string()),
  itemType: s.optional(s.lazy(() => itemTypeSchema)),
  site: s.optional(s.string()),
};

export const queryInternalSchema: Schema<Query> = s.object<Query>(queryProperties, {
  additionalProperties: s.json(),
});

export const querySchema: Schema<Query> = s.lazySchema(() =>
  s.object<Query>(
    {
      ...queryProperties,
      text: s.string().check(s.minLength(1), s.maxLength(2000)),
      q: s.optional(s.string().check(s.minLength(1), s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
