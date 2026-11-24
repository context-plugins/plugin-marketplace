import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Irt = {
  handle?: string;
  address?: string[];
  street?: string;
  city?: string;
  district?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  email?: string[];
  abuseMailbox?: string[];
  phone?: string[];
  faxNo?: string[];
  organizations?: string[];
  adminContacts?: string[];
  techContacts?: string[];
  remarks?: string[];
  signature?: string[];
  encryption?: string[];
  auth?: string[];
  notify?: string[];
  irtNfy?: string[];
  mntBy?: string[];
  mntRef?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const irtSchema: Schema<Irt> = s.object<Irt>(
  {
    handle: s.optional(s.string()),
    address: s.optional(s.array(s.string())),
    street: s.optional(s.string()),
    city: s.optional(s.string()),
    district: s.optional(s.string()),
    state: s.optional(s.string()),
    zipCode: s.optional(s.string()),
    country: s.optional(s.string()),
    email: s.optional(s.array(s.string())),
    abuseMailbox: s.optional(s.array(s.string())),
    phone: s.optional(s.array(s.string())),
    faxNo: s.optional(s.array(s.string())),
    organizations: s.optional(s.array(s.string())),
    adminContacts: s.optional(s.array(s.string())),
    techContacts: s.optional(s.array(s.string())),
    remarks: s.optional(s.array(s.string())),
    signature: s.optional(s.array(s.string())),
    encryption: s.optional(s.array(s.string())),
    auth: s.optional(s.array(s.string())),
    notify: s.optional(s.array(s.string())),
    irtNfy: s.optional(s.array(s.string())),
    mntBy: s.optional(s.array(s.string())),
    mntRef: s.optional(s.array(s.string())),
    _keysMap: {
      zipCode: "zip_code",
      abuseMailbox: "abuse_mailbox",
      faxNo: "fax_no",
      adminContacts: "admin_contacts",
      techContacts: "tech_contacts",
      irtNfy: "irt_nfy",
      mntBy: "mnt_by",
      mntRef: "mnt_ref",
    },
  },
  { additionalProperties: s.json() },
);
