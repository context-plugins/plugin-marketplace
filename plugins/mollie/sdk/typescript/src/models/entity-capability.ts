import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilityStatusReasonSchema, type CapabilityStatusReason } from "./capability-status-reason.js";
import { capabilityStatusSchema, type CapabilityStatus } from "./capability-status.js";
import {
  entityCapabilityRequirementSchema,
  type EntityCapabilityRequirement,
} from "./entity-capability-requirement.js";

export type EntityCapability = {
  /** Always the word `capability` for this resource type. */
  resource: string;
  /** A unique name for this capability like `payments` / `settlements`. */
  name: string;
  status: CapabilityStatus;
  statusReason: CapabilityStatusReason | null;
  requirements: EntityCapabilityRequirement[];
};

export const entityCapabilitySchema: Schema<EntityCapability> = s.object<EntityCapability>({
  resource: s.string(),
  name: s.string(),
  status: capabilityStatusSchema,
  statusReason: s.nullable(s.lazy(() => capabilityStatusReasonSchema)),
  requirements: s.array(s.lazy(() => entityCapabilityRequirementSchema)),
});
