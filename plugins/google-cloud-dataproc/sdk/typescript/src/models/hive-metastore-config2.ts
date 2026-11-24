import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auxiliaryVersionConfigSchema, type AuxiliaryVersionConfig } from "./auxiliary-version-config.js";
import { endpointProtocolSchema, type EndpointProtocol } from "./endpoint-protocol.js";
import { kerberosConfig22Schema, type KerberosConfig22 } from "./kerberos-config22.js";

/**
 * Configuration information specific to running Hive metastore software as the metastore service.
 */
export type HiveMetastoreConfig2 = {
  /**
   * Optional. Information used to configure the Hive metastore service as a service principal in a
   * Kerberos realm. To disable Kerberos, use the UpdateService method and specify this field's path
   * (hive_metastore_config.kerberos_config) in the request's update_mask while omitting this field
   * from the request's service.
   */
  kerberosConfig?: KerberosConfig22;
  /**
   * Optional. The protocol to use for the metastore service endpoint. If unspecified, defaults to
   * THRIFT.
   */
  endpointProtocol?: EndpointProtocol;
  /**
   * Optional. A mapping of Hive metastore version to the auxiliary version configuration. When
   * specified, a secondary Hive metastore service is created along with the primary service. All
   * auxiliary versions must be less than the service's primary version. The key is the auxiliary
   * service name and it must match the regular expression a-z?. This means that the first character
   * must be a lowercase letter, and all the following characters must be hyphens, lowercase
   * letters, or digits, except the last character, which cannot be a hyphen.
   */
  auxiliaryVersions?: Record<string, AuxiliaryVersionConfig>;
  /** Immutable. The Hive metastore schema version. */
  version?: string;
  /**
   * Optional. A mapping of Hive metastore configuration key-value pairs to apply to the Hive
   * metastore (configured in hive-site.xml). The mappings override system defaults (some keys
   * cannot be overridden). These overrides are also applied to auxiliary versions and can be
   * further customized in the auxiliary version's AuxiliaryVersionConfig.
   */
  configOverrides?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hiveMetastoreConfig2Schema: Schema<HiveMetastoreConfig2> = s.object<HiveMetastoreConfig2>(
  {
    kerberosConfig: s.optional(s.lazy(() => kerberosConfig22Schema)),
    endpointProtocol: s.optional(s.lazy(() => endpointProtocolSchema)),
    auxiliaryVersions: s.optional(
      s.record(
        s.string(),
        s.lazy(() => auxiliaryVersionConfigSchema),
      ),
    ),
    version: s.optional(s.string()),
    configOverrides: s.optional(s.record(s.string(), s.string())),
  },
  { additionalProperties: s.json() },
);
