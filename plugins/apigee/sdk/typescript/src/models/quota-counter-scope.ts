import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Scope of the quota decides how the quota counter gets applied and evaluate for quota violation.
 * If the Scope is set as PROXY, then all the operations defined for the APIproduct that are
 * associated with the same proxy will share the same quota counter set at the APIproduct level,
 * making it a global counter at a proxy level. If the Scope is set as OPERATION, then each
 * operations get the counter set at the API product dedicated, making it a local counter. Note
 * that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for
 * itself.
 */
export const QuotaCounterScope = {
  QuotaCounterScopeUnspecified: "QUOTA_COUNTER_SCOPE_UNSPECIFIED",
  Proxy: "PROXY",
  Operation: "OPERATION",
  Product: "PRODUCT",
} as const;
export type QuotaCounterScope = (typeof QuotaCounterScope)[keyof typeof QuotaCounterScope] | (string & {});

export const quotaCounterScopeSchema: EnumSchema<QuotaCounterScope> =
  s.enumOf<QuotaCounterScope>(QuotaCounterScope);
