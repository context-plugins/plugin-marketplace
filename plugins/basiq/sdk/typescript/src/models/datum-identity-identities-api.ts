import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  linksIdentityIdentitiesApiSchema,
  type LinksIdentityIdentitiesApi,
} from "./links-identity-identities-api.js";
import { organisationSchema, type Organisation } from "./organisation.js";
import { physicalAddressSchema, type PhysicalAddress } from "./physical-address.js";

export type DatumIdentityIdentitiesApi = {
  /** Type, always "identity". */
  type: string;
  /** Identity identification. */
  id: string;
  /** Created date of the identity. */
  created: string;
  /** Created date of the identity. */
  updated: string;
  /** ID of that connection. */
  connectionId?: string;
  /** ID of that institution. */
  institutionId?: string;
  /** Data source. */
  source?: string;
  /** FullName of the identity owner. */
  fullName?: string;
  /** FirstName of the identity owner. */
  firstName?: string;
  /** LastName of the identity owner. */
  lastName?: string;
  /** MiddleName of the identity owner. */
  middleName?: string;
  /** Title is the prefix to the name of the identity owner. */
  title?: string;
  /** Date of birth of the identity owner. */
  dob?: string;
  /** Code relating to the occupation held by the identity owner. */
  occupationCode?: string;
  /** Occupation Code Version. */
  occupationCodeVersion?: string;
  /** List of phone numbers of the identity owner. */
  phoneNumbers?: string[];
  /** List of email addresses of the identity owner. */
  emailAddresses?: string[];
  /** List of physical addresses of the identity owner. */
  physicalAddresses?: PhysicalAddress[];
  /** Organisation data. */
  organisation?: Organisation;
  links: LinksIdentityIdentitiesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumIdentityIdentitiesApiSchema: Schema<DatumIdentityIdentitiesApi> =
  s.object<DatumIdentityIdentitiesApi>(
    {
      type: s.string(),
      id: s.string(),
      created: s.string(),
      updated: s.string(),
      connectionId: s.optional(s.string()),
      institutionId: s.optional(s.string()),
      source: s.optional(s.string()),
      fullName: s.optional(s.string()),
      firstName: s.optional(s.string()),
      lastName: s.optional(s.string()),
      middleName: s.optional(s.string()),
      title: s.optional(s.string()),
      dob: s.optional(s.string()),
      occupationCode: s.optional(s.string()),
      occupationCodeVersion: s.optional(s.string()),
      phoneNumbers: s.optional(s.array(s.string())),
      emailAddresses: s.optional(s.array(s.string())),
      physicalAddresses: s.optional(s.array(s.lazy(() => physicalAddressSchema))),
      organisation: s.optional(s.lazy(() => organisationSchema)),
      links: linksIdentityIdentitiesApiSchema,
      _keysMap: {
        connectionId: "connectionID",
        institutionId: "institutionID",
        dob: "DOB",
      },
    },
    { additionalProperties: s.json() },
  );
