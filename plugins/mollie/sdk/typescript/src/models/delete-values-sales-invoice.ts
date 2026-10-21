import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteValuesSalesInvoice = {
  /**
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   *
   * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
   */
  testmode?: boolean | null;
};

export const deleteValuesSalesInvoiceSchema: Schema<DeleteValuesSalesInvoice> =
  s.object<DeleteValuesSalesInvoice>({
    testmode: s.optionalNullable(s.boolean()),
  });
