import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformFilterFieldInfoSchema, type PlatformFilterFieldInfo } from "./platform-filter-field-info.js";

export type PlatformDatasourceFilterInfo = {
  /** Datasource identifier usable in `POST /api/search` `datasources`. */
  datasource: string;
  /**
   * Common built-in filter fields for this datasource. May be empty. A built-in omitted here can
   * still be valid in `POST /api/search`; see `Filter.field` for the full built-in name list.
   */
  filters: PlatformFilterFieldInfo[];
};

export const platformDatasourceFilterInfoSchema: Schema<PlatformDatasourceFilterInfo> =
  s.object<PlatformDatasourceFilterInfo>({
    datasource: s.string(),
    filters: s.array(s.lazy(() => platformFilterFieldInfoSchema)),
  });
