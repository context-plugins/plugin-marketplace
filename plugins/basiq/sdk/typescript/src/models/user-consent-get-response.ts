import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";
import { linksConnectConsentsApiSchema, type LinksConnectConsentsApi } from "./links-connect-consents-api.js";
import { purposeSchema, type Purpose } from "./purpose.js";

export type UserConsentGetResponse = {
  type: string;
  id: string;
  created: Date;
  updated: Date;
  expiryDate: Date;
  origin?: string;
  /** active, revoked, and expired */
  status: string;
  purpose: Purpose;
  data: Data;
  /** To indicate when a user consent was revoked. */
  revoked?: string;
  links?: LinksConnectConsentsApi;
};

export const userConsentGetResponseSchema: Schema<UserConsentGetResponse> = s.object<UserConsentGetResponse>({
  type: s.string(),
  id: s.string(),
  created: s.dateTime(),
  updated: s.dateTime(),
  expiryDate: s.dateTime(),
  origin: s.optional(s.string()),
  status: s.string(),
  purpose: purposeSchema,
  data: dataSchema,
  revoked: s.optional(s.string()),
  links: s.optional(s.lazy(() => linksConnectConsentsApiSchema)),
});
