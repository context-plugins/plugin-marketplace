import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ItemCategory = {
  id?: string;
  code?: string;
  displayName?: string;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const itemCategoryProperties: s.Shape<ItemCategory> = {
  id: s.optional(s.string()),
  code: s.optional(s.string()),
  displayName: s.optional(s.string()),
  lastModifiedDateTime: s.optional(s.dateTime()),
};

export const itemCategoryInternalSchema: Schema<ItemCategory> = s.object<ItemCategory>(
  itemCategoryProperties,
  { additionalProperties: s.json() },
);

export const itemCategorySchema: Schema<ItemCategory> = s.lazySchema(() =>
  s.object<ItemCategory>(
    {
      ...itemCategoryProperties,
      code: s.optional(s.string().check(s.maxLength(20))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
