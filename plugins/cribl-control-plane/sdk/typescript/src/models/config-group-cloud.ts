import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cloudProvider1Schema, type CloudProvider1 } from "./cloud-provider1.js";

export type ConfigGroupCloud = {
  /** Cloud provider for the Worker Group. */
  provider: CloudProvider1 | null;
  /** Cloud region where the Worker Group is deployed. */
  region: string;
};

export const configGroupCloudSchema: Schema<ConfigGroupCloud> = s.object<ConfigGroupCloud>({
  provider: s.nullable(s.lazy(() => cloudProvider1Schema)),
  region: s.string(),
});
