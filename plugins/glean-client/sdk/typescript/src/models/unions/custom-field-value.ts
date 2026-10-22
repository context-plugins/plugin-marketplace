import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  customFieldValueHyperlinkSchema,
  type CustomFieldValueHyperlink,
} from "../custom-field-value-hyperlink.js";
import { customFieldValuePersonSchema, type CustomFieldValuePerson } from "../custom-field-value-person.js";
import { customFieldValueStrSchema, type CustomFieldValueStr } from "../custom-field-value-str.js";

export type CustomFieldValue = CustomFieldValueStr | CustomFieldValueHyperlink | CustomFieldValuePerson;

export const customFieldValueSchema: Schema<CustomFieldValue> = s.of<CustomFieldValue>(
  s.union([
    s.lazy(() => customFieldValueStrSchema),
    s.lazy(() => customFieldValueHyperlinkSchema),
    s.lazy(() => customFieldValuePersonSchema),
  ]),
);
