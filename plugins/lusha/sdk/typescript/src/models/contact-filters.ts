import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { include1Schema, type Include1 } from "./include1.js";

export type ContactFilters = {
  include?: Include1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactFiltersSchema: Schema<ContactFilters> = s.object<ContactFilters>(
  {
    include: s.optional(s.lazy(() => include1Schema)),
  },
  { additionalProperties: s.json() },
);
