import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { emailAddressSchema, type EmailAddress } from "./unions/email-address.js";
import { thumbprintSchema, type Thumbprint } from "./unions/thumbprint.js";

export type Creator = {
  /** The ID of the user or API key pair that created the API key pair. */
  id: string;
  /** The name of the user or API key pair that created the API key pair. */
  name: string;
  /**
   * The email address of the user that created the API key pair, when it was created by a dashboard
   * user.
   */
  emailAddress?: EmailAddress;
  /**
   * The thumbprint of the API key pair that created the API key pair, when it was created by
   * another API key.
   */
  thumbprint?: Thumbprint;
};

export const creatorSchema: Schema<Creator> = s.object<Creator>({
  id: s.string(),
  name: s.string(),
  emailAddress: s.optional(s.lazy(() => emailAddressSchema)),
  thumbprint: s.optional(s.lazy(() => thumbprintSchema)),
  _keysMap: {
    emailAddress: "email_address",
  },
});
