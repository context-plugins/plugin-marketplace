import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  removeCustomFieldSettingRequestSchema,
  type RemoveCustomFieldSettingRequest,
} from "./remove-custom-field-setting-request.js";

export type PortfoliosRemoveCustomFieldSettingRequest = {
  data?: RemoveCustomFieldSettingRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosRemoveCustomFieldSettingRequestSchema: Schema<PortfoliosRemoveCustomFieldSettingRequest> =
  s.object<PortfoliosRemoveCustomFieldSettingRequest>(
    {
      data: s.optional(s.lazy(() => removeCustomFieldSettingRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
