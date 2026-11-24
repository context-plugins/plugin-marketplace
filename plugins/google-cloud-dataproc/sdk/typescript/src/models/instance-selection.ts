import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { diskConfig2Schema, type DiskConfig2 } from "./disk-config2.js";

/** Defines machines types and a rank to which the machines types belong. */
export type InstanceSelection = {
  /** Optional. Full machine-type names, e.g. "n1-standard-16". */
  machineTypes?: string[];
  /**
   * Optional. Disk configuration to apply to the instances in this instance selection. If specified
   * on any entry in instanceSelectionList, then it must be specified on every entry in
   * instanceSelectionList and the instanceGroupConfig must not specify any diskConfig.
   */
  diskConfig?: DiskConfig2;
  /**
   * Optional. Preference of this instance selection. Lower number means higher preference. The
   * service will first try to create a VM based on the machine-type with priority rank and fallback
   * to next rank based on availability. Machine types and instance selections with the same
   * priority have the same preference.
   */
  rank?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instanceSelectionSchema: Schema<InstanceSelection> = s.object<InstanceSelection>(
  {
    machineTypes: s.optional(s.array(s.string())),
    diskConfig: s.optional(s.lazy(() => diskConfig2Schema)),
    rank: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
