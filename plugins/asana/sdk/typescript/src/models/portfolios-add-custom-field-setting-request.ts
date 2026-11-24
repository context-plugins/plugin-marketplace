import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  addCustomFieldSettingRequestSchema,
  type AddCustomFieldSettingRequest,
} from "./add-custom-field-setting-request.js";

export type PortfoliosAddCustomFieldSettingRequest = {
  data?: AddCustomFieldSettingRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosAddCustomFieldSettingRequestSchema: Schema<PortfoliosAddCustomFieldSettingRequest> =
  s.object<PortfoliosAddCustomFieldSettingRequest>(
    {
      data: s.optional(s.lazy(() => addCustomFieldSettingRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
