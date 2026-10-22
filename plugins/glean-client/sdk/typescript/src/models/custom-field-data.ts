import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customFieldValueSchema, type CustomFieldValue } from "./unions/custom-field-value.js";

export type CustomFieldData = {
  /** A user-facing label for this field. */
  label: string;
  values: CustomFieldValue[];
  /** Determines whether the client should display this custom field @default true */
  displayable?: boolean;
};

export const customFieldDataSchema: Schema<CustomFieldData> = s.object<CustomFieldData>({
  label: s.string(),
  values: s.array(s.lazy(() => customFieldValueSchema)),
  displayable: s.defaulted(s.boolean(), true),
});
