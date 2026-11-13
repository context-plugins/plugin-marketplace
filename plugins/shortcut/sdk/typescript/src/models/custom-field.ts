import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customFieldEnumValueInternalSchema,
  customFieldEnumValueSchema,
  type CustomFieldEnumValue,
} from "./custom-field-enum-value.js";

export type CustomField = {
  /** A string description of the CustomField */
  description?: string;
  /** A string that represents the icon that corresponds to this custom field. */
  iconSetIdentifier?: string;
  /** A string description of this resource. @default "custom-field" */
  entityType?: "custom-field";
  /** The types of stories this CustomField is scoped to. */
  storyTypes?: string[];
  /** The name of the Custom Field. */
  name: string;
  /** When true, the CustomFieldEnumValues may not be reordered. */
  fixedPosition?: boolean;
  /** The ID of the Member who created this CustomField, or null when unknown. */
  creatorId: string | null;
  /** The instant when this CustomField was last updated. */
  updatedAt: Date;
  /** The unique public ID for the CustomField. */
  id: string;
  /** A collection of legal values for a CustomField. */
  values?: CustomFieldEnumValue[];
  /** The type of Custom Field, eg. 'enum'. @default "enum" */
  fieldType?: "enum";
  /**
   * An integer indicating the position of this Custom Field with respect to the other CustomField
   */
  position: number;
  /** The canonical name for a Shortcut-defined field. */
  canonicalName?: string;
  /** When true, the CustomField can be applied to entities in the Workspace. */
  enabled: boolean;
  /** The instant when this CustomField was created. */
  createdAt: Date;
};

const customFieldProperties: s.Shape<CustomField> = {
  description: s.optional(s.string()),
  iconSetIdentifier: s.optional(s.string()),
  entityType: s.defaulted(s.literal("custom-field"), "custom-field"),
  storyTypes: s.optional(s.array(s.string())),
  name: s.string(),
  fixedPosition: s.optional(s.boolean()),
  creatorId: s.nullable(s.string()),
  updatedAt: s.dateTime(),
  id: s.string(),
  values: s.optional(s.array(s.lazy(() => customFieldEnumValueInternalSchema))),
  fieldType: s.defaulted(s.literal("enum"), "enum"),
  position: s.int(),
  canonicalName: s.optional(s.string()),
  enabled: s.boolean(),
  createdAt: s.dateTime(),
  _keysMap: {
    iconSetIdentifier: "icon_set_identifier",
    entityType: "entity_type",
    storyTypes: "story_types",
    fixedPosition: "fixed_position",
    creatorId: "creator_id",
    updatedAt: "updated_at",
    fieldType: "field_type",
    canonicalName: "canonical_name",
    createdAt: "created_at",
  },
};

export const customFieldInternalSchema: Schema<CustomField> = s.object<CustomField>(customFieldProperties);

export const customFieldSchema: Schema<CustomField> = s.lazySchema(() =>
  s.object<CustomField>({
    ...customFieldProperties,
    description: s.optional(s.string().check(s.minLength(1), s.maxLength(512))),
    iconSetIdentifier: s.optional(s.string().check(s.minLength(1), s.maxLength(63))),
    name: s.string().check(s.minLength(1), s.maxLength(63)),
    values: s.optional(s.array(s.lazy(() => customFieldEnumValueSchema))),
  }),
);
