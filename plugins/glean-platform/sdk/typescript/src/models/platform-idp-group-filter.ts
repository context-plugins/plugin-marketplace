import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { PlatformFilterOperator1, platformFilterOperator1Schema } from "./platform-filter-operator1.js";

/** A filter on one IdP group field. */
export type PlatformIdpGroupFilter = {
  /** The IdP group field to filter on. The supported fields are is_active and provider_instance. */
  field: string;
  /** The values to match. An IdP group matches when any value matches. */
  values: string[];
  /**
   * The only supported operator is EQUALS. Defaults to EQUALS.
   *
   * @default PlatformFilterOperator1.Equals
   */
  operator?: PlatformFilterOperator1;
};

export const platformIdpGroupFilterSchema: Schema<PlatformIdpGroupFilter> = s.object<PlatformIdpGroupFilter>({
  field: s.string(),
  values: s.array(s.string()),
  operator: s.defaulted(platformFilterOperator1Schema, PlatformFilterOperator1.Equals),
});
