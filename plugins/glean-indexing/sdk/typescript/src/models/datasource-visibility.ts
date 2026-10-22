import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The visibility of the datasource, an enum of VISIBLE_TO_ALL, VISIBLE_TO_TEST_GROUP, NOT_VISIBLE
 */
export const DatasourceVisibility = {
  EnabledForAll: "ENABLED_FOR_ALL",
  EnabledForTestGroup: "ENABLED_FOR_TEST_GROUP",
  NotEnabled: "NOT_ENABLED",
} as const;
export type DatasourceVisibility =
  | (typeof DatasourceVisibility)[keyof typeof DatasourceVisibility]
  | (string & {});

export const datasourceVisibilitySchema: EnumSchema<DatasourceVisibility> =
  s.enumOf<DatasourceVisibility>(DatasourceVisibility);
