import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body8 = {
  /** Updated section name. Passing null or omitting this field will leave it unchanged. */
  name?: string | null;
  /**
   * Updated position of the section in the project. Passing null or omitting this field will leave
   * it unchanged.
   */
  sectionOrder?: number | null;
  /**
   * Updated collapsed state of the section. Passing null or omitting this field will leave it
   * unchanged.
   */
  isCollapsed?: boolean | null;
  /**
   * Updated section description. Pass null to clear the value. Omit this field to keep it
   * unchanged.
   */
  description?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body8Properties: s.Shape<Body8> = {
  name: s.optionalNullable(s.string()),
  sectionOrder: s.optionalNullable(s.int()),
  isCollapsed: s.optionalNullable(s.boolean()),
  description: s.optionalNullable(s.string()),
  _keysMap: {
    sectionOrder: "section_order",
    isCollapsed: "is_collapsed",
  },
};

export const body8InternalSchema: Schema<Body8> = s.object<Body8>(body8Properties, {
  additionalProperties: s.json(),
});

export const body8Schema: Schema<Body8> = s.lazySchema(() =>
  s.object<Body8>(
    {
      ...body8Properties,
      sectionOrder: s.optionalNullable(s.int().check(s.gte(-2147483648), s.lte(2147483647))),
    },
    { additionalProperties: s.json() },
  ),
);
