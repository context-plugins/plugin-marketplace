import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiColorId2Schema, type ApiColorId2 } from "./unions/api-color-id2.js";

export type Body32 = {
  /** Updated label name. Passing null or omitting this field will leave it unchanged. */
  name?: string | null;
  /**
   * Position of the label in the label list. Passing null or omitting this field will leave it
   * unchanged.
   */
  order?: number | null;
  /** Label color. Passing null or omitting this field will leave it unchanged. */
  color?: ApiColorId2 | null;
  /**
   * Whether the label is marked as a favorite. Passing null or omitting this field will leave it
   * unchanged.
   */
  isFavorite?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body32Properties: s.Shape<Body32> = {
  name: s.optionalNullable(s.string()),
  order: s.optionalNullable(s.int()),
  color: s.optionalNullable(s.lazy(() => apiColorId2Schema)),
  isFavorite: s.optionalNullable(s.boolean()),
  _keysMap: {
    isFavorite: "is_favorite",
  },
};

export const body32InternalSchema: Schema<Body32> = s.object<Body32>(body32Properties, {
  additionalProperties: s.json(),
});

export const body32Schema: Schema<Body32> = s.lazySchema(() =>
  s.object<Body32>(
    {
      ...body32Properties,
      name: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(128))),
      order: s.optionalNullable(s.int().check(s.gte(-32768), s.lte(32767))),
    },
    { additionalProperties: s.json() },
  ),
);
