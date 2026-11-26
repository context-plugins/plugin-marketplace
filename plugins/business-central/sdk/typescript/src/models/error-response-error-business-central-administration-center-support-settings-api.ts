import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorResponseBusinessCentralAdministrationCenterSupportSettingsApiSchema,
  type ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi,
} from "./error-response-business-central-administration-center-support-settings-api.js";

export type ErrorResponseErrorBusinessCentralAdministrationCenterSupportSettingsApi = {
  /** A stable error code describing the type and nature of the error */
  code?: string;
  /** A readable description of the error and cause */
  message?: string;
  /** Information about what part of the request caused the error */
  target?: string;
  /** Additional key/value information about the error */
  extensionData?: Record<string, unknown>;
  /** Nested list of error objects with more details */
  clientError?: ErrorResponseBusinessCentralAdministrationCenterSupportSettingsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorBusinessCentralAdministrationCenterSupportSettingsApiSchema: Schema<ErrorResponseErrorBusinessCentralAdministrationCenterSupportSettingsApi> =
  s.object<ErrorResponseErrorBusinessCentralAdministrationCenterSupportSettingsApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
      target: s.optional(s.string()),
      extensionData: s.optional(s.record(s.string(), s.unknown())),
      clientError: s.optional(
        s.array(s.lazy(() => errorResponseBusinessCentralAdministrationCenterSupportSettingsApiSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
