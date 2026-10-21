import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  capabilityRequirementStatusSchema,
  type CapabilityRequirementStatus,
} from "./capability-requirement-status.js";
import { links18Schema, type Links18 } from "./links18.js";

export type EntityCapabilityRequirement = {
  /**
   * The name of this requirement, referring to the task to be fulfilled by the organization to
   * enable or re-enable the capability. The name is unique among other requirements of the same
   * capability. Examples include `needs-data` and `process-first-payment`.
   */
  id: string;
  /**
   * The status of the requirement depends on its due date. If no due date is given, the status will
   * be `requested`.
   */
  status: CapabilityRequirementStatus;
  /**
   * Due date until the requirement must be fulfilled, if any. The date is shown in ISO-8601 format.
   */
  dueDate: string | null;
  links: Links18;
};

export const entityCapabilityRequirementSchema: Schema<EntityCapabilityRequirement> =
  s.object<EntityCapabilityRequirement>({
    id: s.string(),
    status: capabilityRequirementStatusSchema,
    dueDate: s.nullable(s.string()),
    links: links18Schema,
    _keysMap: {
      links: "_links",
    },
  });
