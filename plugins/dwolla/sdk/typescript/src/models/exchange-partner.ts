import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { nameSchema, type Name } from "./name.js";

export type ExchangePartner = {
  links: Record<string, HalLink>;
  id: string;
  name: Name;
  /** @default "active" */
  status?: "active";
  created: Date;
};

export const exchangePartnerSchema: Schema<ExchangePartner> = s.object<ExchangePartner>({
  links: s.record(
    s.string(),
    s.lazy(() => halLinkSchema),
  ),
  id: s.string(),
  name: nameSchema,
  status: s.defaulted(s.literal("active"), "active"),
  created: s.dateTime(),
  _keysMap: {
    links: "_links",
  },
});
