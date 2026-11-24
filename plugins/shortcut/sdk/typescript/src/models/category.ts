import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A Category can be used to associate Objectives. */
export type Category = {
  /** A true/false boolean indicating if the Category has been archived. */
  archived: boolean;
  /** A string description of this resource. */
  entityType: string;
  /** The hex color to be displayed with the Category (for example, "#ff0000"). */
  color: string | null;
  /** The name of the Category. */
  name: string;
  /** The Global ID of the Category. */
  globalId: string;
  /**
   * The type of entity this Category is associated with; currently Milestone or Objective is the
   * only type of Category.
   */
  type: string;
  /** The time/date that the Category was updated. */
  updatedAt: Date;
  /**
   * This field can be set to another unique ID. In the case that the Category has been imported
   * from another tool, the ID in the other tool can be indicated here.
   */
  externalId: string | null;
  /** The unique ID of the Category. */
  id: number;
  /** The time/date that the Category was created. */
  createdAt: Date;
};

const categoryProperties: s.Shape<Category> = {
  archived: s.boolean(),
  entityType: s.string(),
  color: s.nullable(s.string()),
  name: s.string(),
  globalId: s.string(),
  type: s.string(),
  updatedAt: s.dateTime(),
  externalId: s.nullable(s.string()),
  id: s.int(),
  createdAt: s.dateTime(),
  _keysMap: {
    entityType: "entity_type",
    globalId: "global_id",
    updatedAt: "updated_at",
    externalId: "external_id",
    createdAt: "created_at",
  },
};

export const categoryInternalSchema: Schema<Category> = s.object<Category>(categoryProperties);

export const categorySchema: Schema<Category> = s.lazySchema(() =>
  s.object<Category>({
    ...categoryProperties,
    color: s.nullable(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
  }),
);
