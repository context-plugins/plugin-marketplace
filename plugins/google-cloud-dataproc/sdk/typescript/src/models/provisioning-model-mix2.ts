import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Defines how the Group selects the provisioning model to ensure required reliability.
 */
export type ProvisioningModelMix2 = {
  /**
   * Optional. The percentage of target capacity that should use Standard VM. The remaining
   * percentage will use Spot VMs. The percentage applies only to the capacity above
   * standard_capacity_base. eg. If 15 instances are requested and standard_capacity_base is 5 and
   * standard_capacity_percent_above_base is 30, the service will create 5 standard VMs and then
   * start mixing spot and standard VMs for remaining 10 instances. The mix will be 30% standard and
   * 70% spot.
   */
  standardCapacityPercentAboveBase?: number;
  /**
   * Optional. The base capacity that will always use Standard VMs to avoid risk of more preemption
   * than the minimum capacity you need. The service will create only standard VMs until it reaches
   * standard_capacity_base, then it will start using standard_capacity_percent_above_base to mix
   * Spot with Standard VMs. eg. If 15 instances are requested and standard_capacity_base is 5, the
   * service will create 5 standard VMs and thenstart mixing spot and standard VMs for remaining 10
   * instances.
   */
  standardCapacityBase?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const provisioningModelMix2Schema: Schema<ProvisioningModelMix2> = s.object<ProvisioningModelMix2>(
  {
    standardCapacityPercentAboveBase: s.optional(s.int()),
    standardCapacityBase: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
