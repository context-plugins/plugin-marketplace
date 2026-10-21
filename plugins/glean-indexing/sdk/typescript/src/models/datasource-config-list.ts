import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sharedDatasourceConfigSchema, type SharedDatasourceConfig } from "./shared-datasource-config.js";

/** List of datasource configurations. */
export type DatasourceConfigList = {
  /** Datasource configuration. */
  datasourceConfig: SharedDatasourceConfig[];
};

export const datasourceConfigListSchema: Schema<DatasourceConfigList> = s.object<DatasourceConfigList>({
  datasourceConfig: s.array(s.lazy(() => sharedDatasourceConfigSchema)),
});
