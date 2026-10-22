import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceSchema, type Service } from "./service.js";

export type ServiceCreateIdpRequest = {
  /**
   * The numeric ID of the API server to create the service on. Official SDKs inject this
   * automatically for known Authlete clusters, so it can be omitted there; all other callers must
   * provide it.
   */
  apiServerId?: number;
  /** The numeric ID of the organization the service belongs to. */
  organizationId: number;
  service?: Service;
};

export const serviceCreateIdpRequestSchema: Schema<ServiceCreateIdpRequest> =
  s.object<ServiceCreateIdpRequest>({
    apiServerId: s.optional(s.int()),
    organizationId: s.int(),
    service: s.optional(s.lazy(() => serviceSchema)),
  });
