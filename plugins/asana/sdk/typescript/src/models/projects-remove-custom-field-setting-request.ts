import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  removeCustomFieldSettingRequestSchema,
  type RemoveCustomFieldSettingRequest,
} from "./remove-custom-field-setting-request.js";

export type ProjectsRemoveCustomFieldSettingRequest = {
  data?: RemoveCustomFieldSettingRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsRemoveCustomFieldSettingRequestSchema: Schema<ProjectsRemoveCustomFieldSettingRequest> =
  s.object<ProjectsRemoveCustomFieldSettingRequest>(
    {
      data: s.optional(s.lazy(() => removeCustomFieldSettingRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
