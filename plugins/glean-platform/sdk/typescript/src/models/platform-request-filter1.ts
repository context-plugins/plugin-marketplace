import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { PlatformFilterOperator1, platformFilterOperator1Schema } from "./platform-filter-operator1.js";
import { platformRequestStatus1Schema, type PlatformRequestStatus1 } from "./platform-request-status1.js";

/** One status filter criterion. */
export type PlatformRequestFilter1 = {
  /** Allowed field is status, spelled exactly in lowercase. */
  field: string;
  /** Status values to match with OR. */
  values: PlatformRequestStatus1[];
  /**
   * Only EQUALS is supported; defaults to EQUALS when omitted.
   *
   * @default PlatformFilterOperator1.Equals
   */
  operator?: PlatformFilterOperator1;
};

export const platformRequestFilter1Schema: Schema<PlatformRequestFilter1> = s.object<PlatformRequestFilter1>({
  field: s.string(),
  values: s.array(s.lazy(() => platformRequestStatus1Schema)),
  operator: s.defaulted(platformFilterOperator1Schema, PlatformFilterOperator1.Equals),
});
