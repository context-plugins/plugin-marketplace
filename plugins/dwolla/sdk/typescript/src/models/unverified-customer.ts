import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { statusSchema, type Status } from "./status.js";

/** Unverified customer - basic customer type with no KYC verification */
export type UnverifiedCustomer = {
  links: Record<string, HalLink>;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  correlationId?: string;
  created: Date;
  /** @default "unverified" */
  type?: "unverified";
  status: Status;
  businessName?: string;
};

export const unverifiedCustomerSchema: Schema<UnverifiedCustomer> = s.object<UnverifiedCustomer>({
  links: s.record(
    s.string(),
    s.lazy(() => halLinkSchema),
  ),
  id: s.string(),
  firstName: s.string(),
  lastName: s.string(),
  email: s.string(),
  correlationId: s.optional(s.string()),
  created: s.dateTime(),
  type: s.defaulted(s.literal("unverified"), "unverified"),
  status: statusSchema,
  businessName: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
