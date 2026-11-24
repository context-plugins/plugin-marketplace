import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customFieldSettingResponseSchema,
  type CustomFieldSettingResponse,
} from "./custom-field-setting-response.js";

export type PortfoliosAddCustomFieldSettingResponse = {
  data?: CustomFieldSettingResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const portfoliosAddCustomFieldSettingResponseSchema: Schema<PortfoliosAddCustomFieldSettingResponse> =
  s.object<PortfoliosAddCustomFieldSettingResponse>(
    {
      data: s.optional(s.lazy(() => customFieldSettingResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
