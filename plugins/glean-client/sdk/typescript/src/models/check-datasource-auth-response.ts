import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  unauthorizedDatasourceInstanceSchema,
  type UnauthorizedDatasourceInstance,
} from "./unauthorized-datasource-instance.js";

export type CheckDatasourceAuthResponse = {
  /**
   * Datasource instances that require per-user OAuth authorization. Empty when all datasources are
   * authorized.
   */
  unauthorizedDatasourceInstances: UnauthorizedDatasourceInstance[];
};

export const checkDatasourceAuthResponseSchema: Schema<CheckDatasourceAuthResponse> =
  s.object<CheckDatasourceAuthResponse>({
    unauthorizedDatasourceInstances: s.array(s.lazy(() => unauthorizedDatasourceInstanceSchema)),
  });
