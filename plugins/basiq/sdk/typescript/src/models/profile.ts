import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { physicalAddressesSchema, type PhysicalAddresses } from "./physical-addresses.js";

export type Profile = {
  /** User email address */
  emailAddresses: string[];
  /** User first name */
  firstName: string;
  /** User full name */
  fullName: string;
  /** User last name */
  lastName: string;
  /** User middle name */
  middleName: string;
  /** User phone number */
  phoneNumbers: string[];
  /** Physical user addresses */
  physicalAddresses: PhysicalAddresses[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileSchema: Schema<Profile> = s.object<Profile>(
  {
    emailAddresses: s.array(s.string()),
    firstName: s.string(),
    fullName: s.string(),
    lastName: s.string(),
    middleName: s.string(),
    phoneNumbers: s.array(s.string()),
    physicalAddresses: s.array(s.lazy(() => physicalAddressesSchema)),
  },
  { additionalProperties: s.json() },
);
