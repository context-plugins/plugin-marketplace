import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2WebhooksPingRequest = {
  /**
   * You can enable test mode by setting `testmode` to `true`.
   *
   * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
   */
  testmode?: boolean;
};

export const v2WebhooksPingRequestSchema: Schema<V2WebhooksPingRequest> = s.object<V2WebhooksPingRequest>({
  testmode: s.optional(s.boolean()),
});
