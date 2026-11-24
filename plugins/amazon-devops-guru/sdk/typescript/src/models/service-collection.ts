import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  serviceNameAmazonDevOpsGuruAnomaliesApiSchema,
  type ServiceNameAmazonDevOpsGuruAnomaliesApi,
} from "./service-name-amazon-dev-ops-guru-anomalies-api.js";

export type ServiceCollection = {
  /** An array of strings that each specifies the name of an Amazon Web Services service. */
  serviceNames?: ServiceNameAmazonDevOpsGuruAnomaliesApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceCollectionSchema: Schema<ServiceCollection> = s.object<ServiceCollection>(
  {
    serviceNames: s.optional(s.array(s.lazy(() => serviceNameAmazonDevOpsGuruAnomaliesApiSchema))),
    _keysMap: {
      serviceNames: "ServiceNames",
    },
  },
  { additionalProperties: s.json() },
);
