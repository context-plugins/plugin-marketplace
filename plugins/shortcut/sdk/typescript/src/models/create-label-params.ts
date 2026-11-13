import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request parameters for creating a Label on a Shortcut Story. */
export type CreateLabelParams = {
  /** The name of the new Label. */
  name: string;
  /** The description of the new Label. */
  description?: string;
  /** The hex color to be displayed with the Label (for example, "#ff0000"). */
  color?: string;
  /**
   * This field can be set to another unique ID. In the case that the Label has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string;
};

const createLabelParamsProperties: s.Shape<CreateLabelParams> = {
  name: s.string(),
  description: s.optional(s.string()),
  color: s.optional(s.string()),
  externalId: s.optional(s.string()),
  _keysMap: {
    externalId: "external_id",
  },
};

export const createLabelParamsInternalSchema: Schema<CreateLabelParams> =
  s.object<CreateLabelParams>(createLabelParamsProperties);

export const createLabelParamsSchema: Schema<CreateLabelParams> = s.lazySchema(() =>
  s.object<CreateLabelParams>({
    ...createLabelParamsProperties,
    name: s.string().check(s.minLength(1), s.maxLength(128)),
    description: s.optional(s.string().check(s.maxLength(1024))),
    color: s.optional(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
    externalId: s.optional(s.string().check(s.minLength(1), s.maxLength(128))),
  }),
);
