import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformDatasourceFilterInfoSchema,
  type PlatformDatasourceFilterInfo,
} from "./platform-datasource-filter-info.js";

export type PlatformSearchFiltersResponse = {
  /**
   * Datasources visible to the authenticated user. Each `datasource` is an identifier you can pass
   * to `POST /api/search` `datasources`. An empty array means no visible datasources.
   */
  datasources: PlatformDatasourceFilterInfo[];
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSearchFiltersResponseSchema: Schema<PlatformSearchFiltersResponse> =
  s.object<PlatformSearchFiltersResponse>({
    datasources: s.array(s.lazy(() => platformDatasourceFilterInfoSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
