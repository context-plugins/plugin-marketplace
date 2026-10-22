import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { internationalAddressSchema, type InternationalAddress } from "./international-address.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

/** Request body model for a Beneficial Owner */
export type BeneficialOwner = {
  links: Record<string, HalLink>;
  id: string;
  firstName: string;
  lastName: string;
  address: InternationalAddress;
  verificationStatus: VerificationStatus;
  created: Date;
};

export const beneficialOwnerSchema: Schema<BeneficialOwner> = s.object<BeneficialOwner>({
  links: s.record(
    s.string(),
    s.lazy(() => halLinkSchema),
  ),
  id: s.string(),
  firstName: s.string(),
  lastName: s.string(),
  address: internationalAddressSchema,
  verificationStatus: verificationStatusSchema,
  created: s.dateTime(),
  _keysMap: {
    links: "_links",
  },
});
