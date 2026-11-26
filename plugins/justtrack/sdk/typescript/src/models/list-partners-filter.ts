import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListPartnersFilter = {
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const listPartnersFilterProperties: s.Shape<ListPartnersFilter> = {
  name: s.optional(s.string()),
};

export const listPartnersFilterInternalSchema: Schema<ListPartnersFilter> = s.object<ListPartnersFilter>(
  listPartnersFilterProperties,
  { additionalProperties: s.json() },
);

export const listPartnersFilterSchema: Schema<ListPartnersFilter> = s.lazySchema(() =>
  s.object<ListPartnersFilter>(
    {
      ...listPartnersFilterProperties,
      name: s.optional(s.string().check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
