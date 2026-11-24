import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { serviceName1Schema, type ServiceName1 } from "./service-name1.js";

export type ServiceCollectionAmazonDevOpsGuruOrganizationApi = {
  /** An array of strings that each specifies the name of an Amazon Web Services service. */
  serviceNames?: ServiceName1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceCollectionAmazonDevOpsGuruOrganizationApiSchema: Schema<ServiceCollectionAmazonDevOpsGuruOrganizationApi> =
  s.object<ServiceCollectionAmazonDevOpsGuruOrganizationApi>(
    {
      serviceNames: s.optional(s.array(s.lazy(() => serviceName1Schema))),
      _keysMap: {
        serviceNames: "ServiceNames",
      },
    },
    { additionalProperties: s.json() },
  );
