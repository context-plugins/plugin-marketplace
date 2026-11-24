import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldResponseSchema, type CustomFieldResponse } from "./custom-field-response.js";
import { projectCompactSchema, type ProjectCompact } from "./project-compact.js";

export type CustomFieldSettingResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  project?: ProjectCompact;
  /**
   * `is_important` is used in the Asana web application to determine if this custom field is
   * displayed in the list/grid view of a project or portfolio.
   */
  isImportant?: boolean;
  parent?: ProjectCompact;
  customField?: CustomFieldResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldSettingResponseSchema: Schema<CustomFieldSettingResponse> =
  s.object<CustomFieldSettingResponse>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      project: s.optional(s.lazy(() => projectCompactSchema)),
      isImportant: s.optional(s.boolean()),
      parent: s.optional(s.lazy(() => projectCompactSchema)),
      customField: s.optional(s.lazy(() => customFieldResponseSchema)),
      _keysMap: {
        resourceType: "resource_type",
        isImportant: "is_important",
        customField: "custom_field",
      },
    },
    { additionalProperties: s.json() },
  );
