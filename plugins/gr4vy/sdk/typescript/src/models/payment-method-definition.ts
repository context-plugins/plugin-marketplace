import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { longDisplayNameSchema, type LongDisplayName } from "./unions/long-display-name.js";
import { method141Schema, type Method141 } from "./unions/method141.js";

export type PaymentMethodDefinition = {
  /** Unique identifier for the payment method */
  id: string;
  /** URL to the payment method's icon image */
  iconUrl: string;
  /** Short display name for the payment method */
  displayName: string;
  /** Extended display name for the payment method */
  longDisplayName?: LongDisplayName;
  /** Technical identifier for the payment method type */
  method?: Method141;
};

export const paymentMethodDefinitionSchema: Schema<PaymentMethodDefinition> =
  s.object<PaymentMethodDefinition>({
    id: s.string(),
    iconUrl: s.string(),
    displayName: s.string(),
    longDisplayName: s.optional(s.lazy(() => longDisplayNameSchema)),
    method: s.optional(s.lazy(() => method141Schema)),
    _keysMap: {
      iconUrl: "icon_url",
      displayName: "display_name",
      longDisplayName: "long_display_name",
    },
  });
