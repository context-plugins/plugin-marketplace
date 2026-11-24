import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { instanceSelectionResultSchema, type InstanceSelectionResult } from "./instance-selection-result.js";
import { instanceSelectionSchema, type InstanceSelection } from "./instance-selection.js";
import { provisioningModelMix2Schema, type ProvisioningModelMix2 } from "./provisioning-model-mix2.js";

/** Instance flexibility Policy allowing a mixture of VM shapes and provisioning models. */
export type InstanceFlexibilityPolicy = {
  /**
   * Optional. Defines how the Group selects the provisioning model to ensure required reliability.
   */
  provisioningModelMix?: ProvisioningModelMix2;
  /**
   * Output only. A map of instance short name to machine type. The key is the short name of the
   * Compute Engine instance, and the value is the full machine-type name (e.g., 'n1-standard-16').
   * See Machine types for more information on valid machine type strings.
   */
  instanceMachineTypes?: Record<string, string>;
  /** Optional. List of instance selection options that the group will use when creating new VMs. */
  instanceSelectionList?: InstanceSelection[];
  /** Output only. A list of instance selection results in the group. */
  instanceSelectionResults?: InstanceSelectionResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instanceFlexibilityPolicySchema: Schema<InstanceFlexibilityPolicy> =
  s.object<InstanceFlexibilityPolicy>(
    {
      provisioningModelMix: s.optional(s.lazy(() => provisioningModelMix2Schema)),
      instanceMachineTypes: s.optional(s.record(s.string(), s.string())),
      instanceSelectionList: s.optional(s.array(s.lazy(() => instanceSelectionSchema))),
      instanceSelectionResults: s.optional(s.array(s.lazy(() => instanceSelectionResultSchema))),
    },
    { additionalProperties: s.json() },
  );
