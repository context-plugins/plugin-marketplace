import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request to create initial organization auth configuration */
export type OrgAuthConfigCreateRequest = {
  /** Organization contact email */
  contactEmail: string;
  /** Organization registered name */
  registeredName: string;
  /** Admin user full name */
  adminFullName: string;
  /** Whether to send welcome email @default false */
  sendEmail?: boolean;
};

export const orgAuthConfigCreateRequestSchema: Schema<OrgAuthConfigCreateRequest> =
  s.object<OrgAuthConfigCreateRequest>({
    contactEmail: s.string(),
    registeredName: s.string(),
    adminFullName: s.string(),
    sendEmail: s.defaulted(s.boolean(), false),
  });
