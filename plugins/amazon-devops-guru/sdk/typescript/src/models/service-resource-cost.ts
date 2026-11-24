import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

export type ServiceResourceCost = {
  /** The type of the Amazon Web Services resource. */
  type?: string;
  /**
   * The state of the resource. The resource is ACTIVE if it produces metrics, events, or logs
   * within an hour, otherwise it is INACTIVE. You pay for the number of active Amazon Web Services
   * resource hours analyzed for each resource. Inactive resources are not charged.
   */
  state?: State;
  /** The number of active resources analyzed for this service to create a monthly cost estimate. */
  count?: number;
  /**
   * The price per hour to analyze the resources in the service. For more information, see Estimate
   * your Amazon DevOps Guru costs and Amazon DevOps Guru pricing.
   */
  unitCost?: number;
  /** The total estimated monthly cost to analyze the active resources for this resource. */
  cost?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceResourceCostSchema: Schema<ServiceResourceCost> = s.object<ServiceResourceCost>(
  {
    type: s.optional(s.string()),
    state: s.optional(s.lazy(() => stateSchema)),
    count: s.optional(s.int()),
    unitCost: s.optional(s.float64()),
    cost: s.optional(s.float64()),
    _keysMap: {
      type: "Type",
      state: "State",
      count: "Count",
      unitCost: "UnitCost",
      cost: "Cost",
    },
  },
  { additionalProperties: s.json() },
);
