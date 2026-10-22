import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { status3Schema, type Status3 } from "./status3.js";

/**
 * Verified sole proprietorship customer - distinguished from VerifiedBusinessCustomer by
 * businessType=soleProprietorship
 */
export type VerifiedSolePropCustomer = {
  links: Record<string, HalLink>;
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  correlationId?: string;
  created: Date;
  /** @default "business" */
  type?: "business";
  status: Status3;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  businessName: string;
  /** @default "soleProprietorship" */
  businessType?: "soleProprietorship";
  businessClassification: string;
};

export const verifiedSolePropCustomerSchema: Schema<VerifiedSolePropCustomer> =
  s.object<VerifiedSolePropCustomer>({
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
    type: s.defaulted(s.literal("business"), "business"),
    status: status3Schema,
    address1: s.string(),
    address2: s.optional(s.string()),
    city: s.string(),
    state: s.string(),
    postalCode: s.string(),
    businessName: s.string(),
    businessType: s.defaulted(s.literal("soleProprietorship"), "soleProprietorship"),
    businessClassification: s.string(),
    _keysMap: {
      links: "_links",
    },
  });
