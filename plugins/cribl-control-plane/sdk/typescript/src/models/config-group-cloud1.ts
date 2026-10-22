import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cloudProvider1Schema, type CloudProvider1 } from "./cloud-provider1.js";

/** Cloud provider and region details for a Cribl.Cloud Worker Group. */
export type ConfigGroupCloud1 = {
  /** Cloud provider for the Worker Group. */
  provider: CloudProvider1 | null;
  /** Cloud region where the Worker Group is deployed. */
  region: string;
};

export const configGroupCloud1Schema: Schema<ConfigGroupCloud1> = s.object<ConfigGroupCloud1>({
  provider: s.nullable(s.lazy(() => cloudProvider1Schema)),
  region: s.string(),
});
