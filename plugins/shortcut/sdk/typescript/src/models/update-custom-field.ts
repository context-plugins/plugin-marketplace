import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  updateCustomFieldEnumValueInternalSchema,
  updateCustomFieldEnumValueSchema,
  type UpdateCustomFieldEnumValue,
} from "./update-custom-field-enum-value.js";

export type UpdateCustomField = {
  /**
   * Indicates whether the Field is enabled for the Workspace. Only enabled fields can be applied to
   * Stories.
   */
  enabled?: boolean;
  /** A collection of objects representing reporting periods for years. */
  name?: string;
  /**
   * A collection of EnumValue objects representing the values in the domain of some Custom Field.
   */
  values?: UpdateCustomFieldEnumValue[];
  /** A frontend-controlled string that represents the icon for this custom field. */
  iconSetIdentifier?: string;
  /** A description of the purpose of this field. */
  description?: string;
  /** The ID of the CustomField we want to move this CustomField before. */
  beforeId?: string;
  /** The ID of the CustomField we want to move this CustomField after. */
  afterId?: string;
};

const updateCustomFieldProperties: s.Shape<UpdateCustomField> = {
  enabled: s.optional(s.boolean()),
  name: s.optional(s.string()),
  values: s.optional(s.array(s.lazy(() => updateCustomFieldEnumValueInternalSchema))),
  iconSetIdentifier: s.optional(s.string()),
  description: s.optional(s.string()),
  beforeId: s.optional(s.string()),
  afterId: s.optional(s.string()),
  _keysMap: {
    iconSetIdentifier: "icon_set_identifier",
    beforeId: "before_id",
    afterId: "after_id",
  },
};

export const updateCustomFieldInternalSchema: Schema<UpdateCustomField> =
  s.object<UpdateCustomField>(updateCustomFieldProperties);

export const updateCustomFieldSchema: Schema<UpdateCustomField> = s.lazySchema(() =>
  s.object<UpdateCustomField>({
    ...updateCustomFieldProperties,
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(63))),
    values: s.optional(s.array(s.lazy(() => updateCustomFieldEnumValueSchema))),
    iconSetIdentifier: s.optional(s.string().check(s.minLength(1), s.maxLength(63))),
  }),
);
