import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  updateServiceIntegrationConfigSchema,
  type UpdateServiceIntegrationConfig,
} from "./update-service-integration-config.js";

export type ServiceIntegrationsRequest = {
  serviceIntegration: UpdateServiceIntegrationConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceIntegrationsRequestSchema: Schema<ServiceIntegrationsRequest> =
  s.object<ServiceIntegrationsRequest>(
    {
      serviceIntegration: updateServiceIntegrationConfigSchema,
      _keysMap: {
        serviceIntegration: "ServiceIntegration",
      },
    },
    { additionalProperties: s.json() },
  );
