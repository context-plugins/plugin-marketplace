import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { includeLushaSignalsApiSchema, type IncludeLushaSignalsApi } from "./include-lusha-signals-api.js";

export type FiltersLushaSignalsApi = {
  include?: IncludeLushaSignalsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filtersLushaSignalsApiSchema: Schema<FiltersLushaSignalsApi> = s.object<FiltersLushaSignalsApi>(
  {
    include: s.optional(s.lazy(() => includeLushaSignalsApiSchema)),
  },
  { additionalProperties: s.json() },
);
