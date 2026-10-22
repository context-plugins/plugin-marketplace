import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { PlatformFilterOperator, platformFilterOperatorSchema } from "./platform-filter-operator.js";

/** One equality filter on configured usage limits. */
export type Filter = {
  /** Field to match; client_id or target_type. */
  field: string;
  /** Nonblank values to match exactly; any value may match. */
  values: string[];
  /** Comparison operator; only EQUALS is supported. @default PlatformFilterOperator.Equals */
  operator?: PlatformFilterOperator;
};

export const filterSchema: Schema<Filter> = s.object<Filter>({
  field: s.string(),
  values: s.array(s.string()),
  operator: s.defaulted(platformFilterOperatorSchema, PlatformFilterOperator.Equals),
});
