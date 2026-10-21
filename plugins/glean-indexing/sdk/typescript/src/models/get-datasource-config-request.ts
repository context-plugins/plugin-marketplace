import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /getdatasourceconfig API call */
export type GetDatasourceConfigRequest = {
  /** Datasource name for which config is needed. */
  datasource: string;
};

export const getDatasourceConfigRequestSchema: Schema<GetDatasourceConfigRequest> =
  s.object<GetDatasourceConfigRequest>({
    datasource: s.string(),
  });
