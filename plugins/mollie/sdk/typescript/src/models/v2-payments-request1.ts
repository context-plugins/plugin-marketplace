import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2PaymentsRequest1 = {
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
};

export const v2PaymentsRequest1Schema: Schema<V2PaymentsRequest1> = s.object<V2PaymentsRequest1>({
  testmode: s.optionalNullable(s.boolean()),
});
