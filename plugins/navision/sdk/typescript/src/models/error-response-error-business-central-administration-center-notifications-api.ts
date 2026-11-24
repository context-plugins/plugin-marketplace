import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorResponseBusinessCentralAdministrationCenterNotificationsApiSchema,
  type ErrorResponseBusinessCentralAdministrationCenterNotificationsApi,
} from "./error-response-business-central-administration-center-notifications-api.js";

export type ErrorResponseErrorBusinessCentralAdministrationCenterNotificationsApi = {
  /** A stable error code describing the type and nature of the error */
  code?: string;
  /** A readable description of the error and cause */
  message?: string;
  /** Information about what part of the request caused the error */
  target?: string;
  /** Additional key/value information about the error */
  extensionData?: Record<string, unknown>;
  /** Nested list of error objects with more details */
  clientError?: ErrorResponseBusinessCentralAdministrationCenterNotificationsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorBusinessCentralAdministrationCenterNotificationsApiSchema: Schema<ErrorResponseErrorBusinessCentralAdministrationCenterNotificationsApi> =
  s.object<ErrorResponseErrorBusinessCentralAdministrationCenterNotificationsApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
      target: s.optional(s.string()),
      extensionData: s.optional(s.record(s.string(), s.unknown())),
      clientError: s.optional(
        s.array(s.lazy(() => errorResponseBusinessCentralAdministrationCenterNotificationsApiSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
