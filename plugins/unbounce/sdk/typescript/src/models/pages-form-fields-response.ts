import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formFieldSchema, type FormField } from "./form-field.js";

export type PagesFormFieldsResponse = {
  formFields?: FormField[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pagesFormFieldsResponseSchema: Schema<PagesFormFieldsResponse> =
  s.object<PagesFormFieldsResponse>(
    {
      formFields: s.optional(s.array(s.lazy(() => formFieldSchema))),
      _keysMap: {
        formFields: "form_fields",
      },
    },
    { additionalProperties: s.json() },
  );
