import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filtersSchema, type Filters } from "./filters.js";

export type Options = {
  /** Filters to narrow down which changes trigger the webhook. */
  filters?: Filters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optionsSchema: Schema<Options> = s.object<Options>(
  {
    filters: s.optional(s.lazy(() => filtersSchema)),
  },
  { additionalProperties: s.json() },
);
