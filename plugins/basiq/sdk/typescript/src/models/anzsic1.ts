import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { class1EnrichApiSchema, type Class1EnrichApi } from "./class1-enrich-api.js";
import { division1Schema, type Division1 } from "./division1.js";
import { group1Schema, type Group1 } from "./group1.js";
import { subclassSchema, type Subclass } from "./subclass.js";
import { subdivision1Schema, type Subdivision1 } from "./subdivision1.js";

export type Anzsic1 = {
  /** Details the code and title of the merchant ANZSIC division. */
  division?: Division1;
  /** Details the code and title of the merchant ANZSIC subdivision. */
  subdivision?: Subdivision1;
  /** Details the code and title of the merchant ANZSIC group. */
  group?: Group1;
  /** Details the code and title of the merchant ANZSIC class. */
  class?: Class1EnrichApi;
  subclass?: Subclass;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anzsic1Schema: Schema<Anzsic1> = s.object<Anzsic1>(
  {
    division: s.optional(s.lazy(() => division1Schema)),
    subdivision: s.optional(s.lazy(() => subdivision1Schema)),
    group: s.optional(s.lazy(() => group1Schema)),
    class: s.optional(s.lazy(() => class1EnrichApiSchema)),
    subclass: s.optional(s.lazy(() => subclassSchema)),
  },
  { additionalProperties: s.json() },
);
