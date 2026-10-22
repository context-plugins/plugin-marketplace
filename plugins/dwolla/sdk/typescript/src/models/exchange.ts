import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardDetails3Schema, type CardDetails3 } from "./card-details3.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { status7Schema, type Status7 } from "./status7.js";

export type Exchange = {
  links: Record<string, HalLink>;
  id: string;
  status: Status7;
  created: Date;
  /**
   * Card-specific details. Only present for card exchanges where an Account Name Inquiry (ANI) was
   * requested on the exchange session.
   */
  cardDetails?: CardDetails3;
};

export const exchangeSchema: Schema<Exchange> = s.object<Exchange>({
  links: s.record(
    s.string(),
    s.lazy(() => halLinkSchema),
  ),
  id: s.string(),
  status: status7Schema,
  created: s.dateTime(),
  cardDetails: s.optional(s.lazy(() => cardDetails3Schema)),
  _keysMap: {
    links: "_links",
  },
});
