import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companies1InternalSchema, companies1Schema, type Companies1 } from "./companies1.js";
import { contacts1Schema, type Contacts1 } from "./contacts1.js";

/**
 * `filters.contacts` cannot be combined with company `searchText`, `signals`, `intent`, or
 * `technologies` on the same request — doing so returns `400` (contact filters are never silently
 * ignored).
 */
export type Filters = {
  companies: Companies1;
  contacts?: Contacts1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const filtersProperties: s.Shape<Filters> = {
  companies: companies1InternalSchema,
  contacts: s.optional(s.lazy(() => contacts1Schema)),
};

export const filtersInternalSchema: Schema<Filters> = s.object<Filters>(filtersProperties, {
  additionalProperties: s.json(),
});

export const filtersSchema: Schema<Filters> = s.lazySchema(() =>
  s.object<Filters>(
    {
      ...filtersProperties,
      companies: companies1Schema,
    },
    { additionalProperties: s.json() },
  ),
);
