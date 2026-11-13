import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateLabel = {
  /** The new name of the label. */
  name?: string;
  /** The new description of the label. */
  description?: string;
  /** The hex color to be displayed with the Label (for example, "#ff0000"). */
  color?: string | null;
  /** A true/false boolean indicating if the Label has been archived. */
  archived?: boolean;
};

const updateLabelProperties: s.Shape<UpdateLabel> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  color: s.optionalNullable(s.string()),
  archived: s.optional(s.boolean()),
};

export const updateLabelInternalSchema: Schema<UpdateLabel> = s.object<UpdateLabel>(updateLabelProperties);

export const updateLabelSchema: Schema<UpdateLabel> = s.lazySchema(() =>
  s.object<UpdateLabel>({
    ...updateLabelProperties,
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(128))),
    description: s.optional(s.string().check(s.maxLength(1024))),
    color: s.optionalNullable(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
  }),
);
