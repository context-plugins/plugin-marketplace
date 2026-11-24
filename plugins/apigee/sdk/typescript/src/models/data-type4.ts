import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Type of data to be managed. */
export const DataType4 = {
  DataTypeUnspecified: "DATA_TYPE_UNSPECIFIED",
  ProxyDeploymentManifest: "PROXY_DEPLOYMENT_MANIFEST",
  EnvironmentManifest: "ENVIRONMENT_MANIFEST",
  ProxyBundle: "PROXY_BUNDLE",
  SharedFlowBundle: "SHARED_FLOW_BUNDLE",
} as const;
export type DataType4 = (typeof DataType4)[keyof typeof DataType4] | (string & {});

export const dataType4Schema: EnumSchema<DataType4> = s.enumOf<DataType4>(DataType4);
