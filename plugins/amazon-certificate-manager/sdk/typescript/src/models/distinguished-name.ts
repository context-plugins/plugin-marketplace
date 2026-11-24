import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customAttributeSchema, type CustomAttribute } from "./custom-attribute.js";

export type DistinguishedName = {
  /** The common name (CN) attribute. */
  commonName?: string;
  /** The domain component attributes. */
  domainComponents?: string[];
  /** The country (C) attribute. */
  country?: string;
  /**
   * A list of custom attributes in the distinguished name. Each custom attribute contains an object
   * identifier (OID) and its corresponding value.
   */
  customAttributes?: CustomAttribute[];
  /** The distinguished name qualifier attribute. */
  distinguishedNameQualifier?: string;
  /** The generation qualifier attribute. */
  generationQualifier?: string;
  /** The given name attribute. */
  givenName?: string;
  /** The initials attribute. */
  initials?: string;
  /** The locality (L) attribute. */
  locality?: string;
  /** The organization (O) attribute. */
  organization?: string;
  /** The organizational unit (OU) attribute. */
  organizationalUnit?: string;
  /** The pseudonym attribute. */
  pseudonym?: string;
  /** The serial number attribute. */
  serialNumber?: string;
  /** The state or province (ST) attribute. */
  state?: string;
  /** The surname attribute. */
  surname?: string;
  /** The title attribute. */
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const distinguishedNameSchema: Schema<DistinguishedName> = s.object<DistinguishedName>(
  {
    commonName: s.optional(s.string()),
    domainComponents: s.optional(s.array(s.string())),
    country: s.optional(s.string()),
    customAttributes: s.optional(s.array(s.lazy(() => customAttributeSchema))),
    distinguishedNameQualifier: s.optional(s.string()),
    generationQualifier: s.optional(s.string()),
    givenName: s.optional(s.string()),
    initials: s.optional(s.string()),
    locality: s.optional(s.string()),
    organization: s.optional(s.string()),
    organizationalUnit: s.optional(s.string()),
    pseudonym: s.optional(s.string()),
    serialNumber: s.optional(s.string()),
    state: s.optional(s.string()),
    surname: s.optional(s.string()),
    title: s.optional(s.string()),
    _keysMap: {
      commonName: "CommonName",
      domainComponents: "DomainComponents",
      country: "Country",
      customAttributes: "CustomAttributes",
      distinguishedNameQualifier: "DistinguishedNameQualifier",
      generationQualifier: "GenerationQualifier",
      givenName: "GivenName",
      initials: "Initials",
      locality: "Locality",
      organization: "Organization",
      organizationalUnit: "OrganizationalUnit",
      pseudonym: "Pseudonym",
      serialNumber: "SerialNumber",
      state: "State",
      surname: "Surname",
      title: "Title",
    },
  },
  { additionalProperties: s.json() },
);
