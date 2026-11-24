import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classEnrichApiSchema, type ClassEnrichApi } from "./class-enrich-api.js";
import { divisionSchema, type Division } from "./division.js";
import { groupSchema, type Group } from "./group.js";
import { subclassSchema, type Subclass } from "./subclass.js";
import { subdivisionSchema, type Subdivision } from "./subdivision.js";

export type Anzsic = {
  division?: Division;
  subdivision?: Subdivision;
  group?: Group;
  class?: ClassEnrichApi;
  subclass?: Subclass;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anzsicSchema: Schema<Anzsic> = s.object<Anzsic>(
  {
    division: s.optional(s.lazy(() => divisionSchema)),
    subdivision: s.optional(s.lazy(() => subdivisionSchema)),
    group: s.optional(s.lazy(() => groupSchema)),
    class: s.optional(s.lazy(() => classEnrichApiSchema)),
    subclass: s.optional(s.lazy(() => subclassSchema)),
  },
  { additionalProperties: s.json() },
);
