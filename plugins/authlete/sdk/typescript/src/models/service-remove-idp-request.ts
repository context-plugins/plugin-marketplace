import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ServiceRemoveIdpRequest = {
  /**
   * The numeric ID of the API server the service belongs to. Official SDKs inject this
   * automatically for known Authlete clusters, so it can be omitted there; all other callers must
   * provide it.
   */
  apiServerId?: number;
  /** The numeric ID of the organization the service belongs to. */
  organizationId: number;
  /** The numeric ID of the service to delete. */
  serviceId: number;
};

export const serviceRemoveIdpRequestSchema: Schema<ServiceRemoveIdpRequest> =
  s.object<ServiceRemoveIdpRequest>({
    apiServerId: s.optional(s.int()),
    organizationId: s.int(),
    serviceId: s.int(),
  });
