import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approvalTarget1Schema, type ApprovalTarget1 } from "./approval-target1.js";

export type PaymentServiceConfiguration = {
  /**
   * The browser target that an approval URL must be opened in. If any or null, then there is no
   * specific requirement.
   */
  approvalUiTarget: ApprovalTarget1;
  /** Height of the approval interface in either pixels or view height (vh). */
  approvalUiHeight: string;
  /** Width of the approval interface in either pixels or view width (vw). */
  approvalUiWidth: string;
  /**
   * The maximum number of cart items supported by this connector before we will truncate the list.
   */
  cartItemsLimit: number;
  /** Defines if cart items are required by this connector. */
  cartItemsRequired: boolean;
  /** Defines if the cart items sum value should match the transaction amount. */
  cartItemsShouldMatchAmount: boolean;
};

export const paymentServiceConfigurationSchema: Schema<PaymentServiceConfiguration> =
  s.object<PaymentServiceConfiguration>({
    approvalUiTarget: approvalTarget1Schema,
    approvalUiHeight: s.string(),
    approvalUiWidth: s.string(),
    cartItemsLimit: s.int(),
    cartItemsRequired: s.boolean(),
    cartItemsShouldMatchAmount: s.boolean(),
    _keysMap: {
      approvalUiTarget: "approval_ui_target",
      approvalUiHeight: "approval_ui_height",
      approvalUiWidth: "approval_ui_width",
      cartItemsLimit: "cart_items_limit",
      cartItemsRequired: "cart_items_required",
      cartItemsShouldMatchAmount: "cart_items_should_match_amount",
    },
  });
