import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { networkConfig1Schema, type NetworkConfig1 } from "./network-config1.js";

/** Configuration information for the auxiliary service versions. */
export type AuxiliaryVersionConfig = {
  /**
   * Output only. The network configuration contains the endpoint URI(s) of the auxiliary Hive
   * metastore service.
   */
  networkConfig?: NetworkConfig1;
  /**
   * Optional. The Hive metastore version of the auxiliary service. It must be less than the primary
   * Hive metastore service's version.
   */
  version?: string;
  /**
   * Optional. A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary
   * Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If
   * keys are present in both the auxiliary version's overrides and the primary version's overrides,
   * the value from the auxiliary version's overrides takes precedence.
   */
  configOverrides?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const auxiliaryVersionConfigSchema: Schema<AuxiliaryVersionConfig> = s.object<AuxiliaryVersionConfig>(
  {
    networkConfig: s.optional(s.lazy(() => networkConfig1Schema)),
    version: s.optional(s.string()),
    configOverrides: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
