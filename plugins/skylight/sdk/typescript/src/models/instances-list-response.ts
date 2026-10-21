import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { instanceStatusResponseSchema, type InstanceStatusResponse } from "./instance-status-response.js";

export type InstancesListResponse = {
  /** List of instances associated with the API key */
  instances: InstanceStatusResponse[];
};

export const instancesListResponseSchema: Schema<InstancesListResponse> = s.object<InstancesListResponse>({
  instances: s.array(s.lazy(() => instanceStatusResponseSchema)),
});
