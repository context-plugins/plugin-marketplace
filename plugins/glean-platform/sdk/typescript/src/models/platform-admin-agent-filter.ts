import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { PlatformFilterOperator1, platformFilterOperator1Schema } from "./platform-filter-operator1.js";

/** A filter on one agent field. */
export type PlatformAdminAgentFilter = {
  /** The agent field to filter on. The only supported field is is_active. */
  field: string;
  /** The values to match. An agent matches when any value matches. */
  values: string[];
  /**
   * The only supported operator is EQUALS. Defaults to EQUALS.
   *
   * @default PlatformFilterOperator1.Equals
   */
  operator?: PlatformFilterOperator1;
};

export const platformAdminAgentFilterSchema: Schema<PlatformAdminAgentFilter> =
  s.object<PlatformAdminAgentFilter>({
    field: s.string(),
    values: s.array(s.string()),
    operator: s.defaulted(platformFilterOperator1Schema, PlatformFilterOperator1.Equals),
  });
