import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { PlatformFilterOperator1, platformFilterOperator1Schema } from "./platform-filter-operator1.js";
import { platformRequestStatus1Schema, type PlatformRequestStatus1 } from "./platform-request-status1.js";

/** A status filter using the backend's status-IN matching. */
export type PlatformRequestFilter = {
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

export const platformRequestFilterSchema: Schema<PlatformRequestFilter> = s.object<PlatformRequestFilter>({
  field: s.string(),
  values: s.array(s.lazy(() => platformRequestStatus1Schema)),
  operator: s.defaulted(platformFilterOperator1Schema, PlatformFilterOperator1.Equals),
});
