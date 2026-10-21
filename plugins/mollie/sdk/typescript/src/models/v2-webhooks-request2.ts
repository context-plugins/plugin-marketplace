import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2WebhooksRequest2 = {
  /**
   * You can enable test mode by setting `testmode` to `true`.
   *
   * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
   */
  testmode?: boolean;
};

export const v2WebhooksRequest2Schema: Schema<V2WebhooksRequest2> = s.object<V2WebhooksRequest2>({
  testmode: s.optional(s.boolean()),
});
