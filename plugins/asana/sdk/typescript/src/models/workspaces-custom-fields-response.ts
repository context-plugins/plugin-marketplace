import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldResponseSchema, type CustomFieldResponse } from "./custom-field-response.js";

export type WorkspacesCustomFieldsResponse = {
  data?: CustomFieldResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesCustomFieldsResponseSchema: Schema<WorkspacesCustomFieldsResponse> =
  s.object<WorkspacesCustomFieldsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => customFieldResponseSchema))),
    },
    { additionalProperties: s.json() },
  );
