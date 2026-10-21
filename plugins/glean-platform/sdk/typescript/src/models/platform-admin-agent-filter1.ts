import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { PlatformFilterOperator1, platformFilterOperator1Schema } from "./platform-filter-operator1.js";

/** One filter on an agent field. */
export type PlatformAdminAgentFilter1 = {
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

export const platformAdminAgentFilter1Schema: Schema<PlatformAdminAgentFilter1> =
  s.object<PlatformAdminAgentFilter1>({
    field: s.string(),
    values: s.array(s.string()),
    operator: s.defaulted(platformFilterOperator1Schema, PlatformFilterOperator1.Equals),
  });
