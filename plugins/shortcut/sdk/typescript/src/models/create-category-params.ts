import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request parameters for creating a Category with a Objective. */
export type CreateCategoryParams = {
  /** The name of the new Category. */
  name: string;
  /** The hex color to be displayed with the Category (for example, "#ff0000"). */
  color?: string;
  /**
   * This field can be set to another unique ID. In the case that the Category has been imported
   * from another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string;
};

const createCategoryParamsProperties: s.Shape<CreateCategoryParams> = {
  name: s.string(),
  color: s.optional(s.string()),
  externalId: s.optional(s.string()),
  _keysMap: {
    externalId: "external_id",
  },
};

export const createCategoryParamsInternalSchema: Schema<CreateCategoryParams> =
  s.object<CreateCategoryParams>(createCategoryParamsProperties);

export const createCategoryParamsSchema: Schema<CreateCategoryParams> = s.lazySchema(() =>
  s.object<CreateCategoryParams>({
    ...createCategoryParamsProperties,
    name: s.string().check(s.minLength(1), s.maxLength(128)),
    color: s.optional(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
    externalId: s.optional(s.string().check(s.minLength(1), s.maxLength(128))),
  }),
);
