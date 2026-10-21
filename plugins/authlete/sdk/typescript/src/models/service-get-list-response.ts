import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serviceSchema, type Service } from "./service.js";

export type ServiceGetListResponse = {
  /**
   * Start index (inclusive) of the result set. The default value is 0. Must not be a negative
   * number.
   */
  start?: number;
  /**
   * Start index (inclusive) of the result set. The default value is 0. Must not be a negative
   * number.
   */
  end?: number;
  /**
   * Total number of services owned by the service owner. This doesn't mean the number of services
   * contained in the response.
   */
  totalCount?: number;
  /** An array of services. */
  services?: Service[];
};

export const serviceGetListResponseSchema: Schema<ServiceGetListResponse> = s.object<ServiceGetListResponse>({
  start: s.optional(s.int()),
  end: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  services: s.optional(s.array(s.lazy(() => serviceSchema))),
});
