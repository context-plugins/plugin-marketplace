import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateCategory = {
  /** The name of the new Category. */
  name: string;
  /** The hex color to be displayed with the Category (for example, "#ff0000"). */
  color?: string;
  /**
   * This field can be set to another unique ID. In the case that the Category has been imported
   * from another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string;
  /**
   * The type of entity this Category is associated with; currently Milestone or Objective is the
   * only type of Category.
   */
  type?: Record<string, unknown>;
};

const createCategoryProperties: s.Shape<CreateCategory> = {
  name: s.string(),
  color: s.optional(s.string()),
  externalId: s.optional(s.string()),
  type: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    externalId: "external_id",
  },
};

export const createCategoryInternalSchema: Schema<CreateCategory> =
  s.object<CreateCategory>(createCategoryProperties);

export const createCategorySchema: Schema<CreateCategory> = s.lazySchema(() =>
  s.object<CreateCategory>({
    ...createCategoryProperties,
    name: s.string().check(s.minLength(1), s.maxLength(128)),
    color: s.optional(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
    externalId: s.optional(s.string().check(s.minLength(1), s.maxLength(128))),
  }),
);
