import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customFieldSettingResponseSchema,
  type CustomFieldSettingResponse,
} from "./custom-field-setting-response.js";

export type ProjectsCustomFieldSettingsResponse = {
  data?: CustomFieldSettingResponse[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsCustomFieldSettingsResponseSchema: Schema<ProjectsCustomFieldSettingsResponse> =
  s.object<ProjectsCustomFieldSettingsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => customFieldSettingResponseSchema))),
    },
    { additionalProperties: s.json() },
  );
