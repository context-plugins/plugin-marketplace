import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateCategory = {
  /** The new name of the Category. */
  name?: string;
  /** The hex color to be displayed with the Category (for example, "#ff0000"). */
  color?: string | null;
  /** A true/false boolean indicating if the Category has been archived. */
  archived?: boolean;
};

const updateCategoryProperties: s.Shape<UpdateCategory> = {
  name: s.optional(s.string()),
  color: s.optionalNullable(s.string()),
  archived: s.optional(s.boolean()),
};

export const updateCategoryInternalSchema: Schema<UpdateCategory> =
  s.object<UpdateCategory>(updateCategoryProperties);

export const updateCategorySchema: Schema<UpdateCategory> = s.lazySchema(() =>
  s.object<UpdateCategory>({
    ...updateCategoryProperties,
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(128))),
    color: s.optionalNullable(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
  }),
);
