import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes a relationship edge between a source and destination entity */
export type EntityRelationship = {
  /**
   * The title or type of relationship. Currently an enum of `CHIEF_OF_STAFF`, `EXECUTIVE_ASSISTANT`
   */
  name: string;
  /**
   * Email of the person with whom the relationship exists. Per the example above, either `B` or
   * `C`'s email depending on the relationship.
   */
  email: string;
};

export const entityRelationshipSchema: Schema<EntityRelationship> = s.object<EntityRelationship>({
  name: s.string(),
  email: s.string(),
});
