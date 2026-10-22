import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IntegrationDeliveryConfigurationResponse = {
  /** The status code returned by the validation */
  statusCode?: number;
  error?: string;
  timestamp?: number;
  /** JSON response to the validation request */
  responseBody?: string;
};

export const integrationDeliveryConfigurationResponseSchema: Schema<IntegrationDeliveryConfigurationResponse> =
  s.object<IntegrationDeliveryConfigurationResponse>({
    statusCode: s.optional(s.int()),
    error: s.optional(s.string()),
    timestamp: s.optional(s.int()),
    responseBody: s.optional(s.string()),
  });
