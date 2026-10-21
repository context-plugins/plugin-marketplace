import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityTypeSchema, type EntityType } from "./entity-type.js";

/** A disambiguation between multiple entities with the same name */
export type Disambiguation = {
  /** Name of the ambiguous entity */
  name?: string;
  /** The unique id of the entity in the knowledge graph */
  id?: string;
  /** The type of entity. */
  type?: EntityType;
};

export const disambiguationSchema: Schema<Disambiguation> = s.object<Disambiguation>({
  name: s.optional(s.string()),
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => entityTypeSchema)),
});
