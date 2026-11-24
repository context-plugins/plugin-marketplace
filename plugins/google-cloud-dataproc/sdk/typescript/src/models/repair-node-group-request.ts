import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { repairActionSchema, type RepairAction } from "./repair-action.js";

export type RepairNodeGroupRequest = {
  /**
   * Optional. A unique ID used to identify the request. If the server receives two
   * RepairNodeGroupRequest with the same ID, the second request is ignored and the first
   * google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set
   * this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must
   * contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum
   * length is 40 characters.
   */
  requestId?: string;
  /** Required. Repair action to take on specified resources of the node pool. */
  repairAction?: RepairAction;
  /**
   * Required. Name of instances to be repaired. These instances must belong to specified node pool.
   */
  instanceNames?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repairNodeGroupRequestSchema: Schema<RepairNodeGroupRequest> = s.object<RepairNodeGroupRequest>(
  {
    requestId: s.optional(s.string()),
    repairAction: s.optional(s.lazy(() => repairActionSchema)),
    instanceNames: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
