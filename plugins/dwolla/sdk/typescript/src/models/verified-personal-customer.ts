import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { status2Schema, type Status2 } from "./status2.js";

/** Verified personal customer - fully KYC verified individual with send and receive capabilities */
export type VerifiedPersonalCustomer = {
  links: Record<string, HalLink>;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  correlationId?: string;
  created: Date;
  /** @default "personal" */
  type?: "personal";
  status: Status2;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
};

export const verifiedPersonalCustomerSchema: Schema<VerifiedPersonalCustomer> =
  s.object<VerifiedPersonalCustomer>({
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
    type: s.defaulted(s.literal("personal"), "personal"),
    status: status2Schema,
    address1: s.string(),
    address2: s.optional(s.string()),
    city: s.string(),
    state: s.string(),
    postalCode: s.string(),
    _keysMap: {
      links: "_links",
    },
  });
