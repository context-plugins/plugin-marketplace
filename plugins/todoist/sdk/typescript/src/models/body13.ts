import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiColorId2Schema, type ApiColorId2 } from "./unions/api-color-id2.js";

export type Body13 = {
  /** Name of the new label. */
  name: string;
  /** Position of the new label in the label list */
  order?: number | null;
  /** Label color. */
  color?: ApiColorId2;
  /** Whether the label is marked as a favorite. @default false */
  isFavorite?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body13Properties: s.Shape<Body13> = {
  name: s.string(),
  order: s.optionalNullable(s.int()),
  color: s.optional(s.lazy(() => apiColorId2Schema)),
  isFavorite: s.defaulted(s.boolean(), false),
  _keysMap: {
    isFavorite: "is_favorite",
  },
};

export const body13InternalSchema: Schema<Body13> = s.object<Body13>(body13Properties, {
  additionalProperties: s.json(),
});

export const body13Schema: Schema<Body13> = s.lazySchema(() =>
  s.object<Body13>(
    {
      ...body13Properties,
      name: s.string().check(s.minLength(1), s.maxLength(128)),
      order: s.optionalNullable(s.int().check(s.gte(-32768), s.lte(32767))),
    },
    { additionalProperties: s.json() },
  ),
);
