import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  serviceIntegrationConfigSchema,
  type ServiceIntegrationConfig,
} from "./service-integration-config.js";

export type DescribeServiceIntegrationResponse = {
  serviceIntegration?: ServiceIntegrationConfig;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeServiceIntegrationResponseSchema: Schema<DescribeServiceIntegrationResponse> =
  s.object<DescribeServiceIntegrationResponse>(
    {
      serviceIntegration: s.optional(s.lazy(() => serviceIntegrationConfigSchema)),
      _keysMap: {
        serviceIntegration: "ServiceIntegration",
      },
    },
    { additionalProperties: s.json() },
  );
