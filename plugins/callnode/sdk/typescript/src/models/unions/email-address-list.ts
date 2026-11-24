import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** One address or a list. Each may be `Name <address>` or a bare address. */
export type EmailAddressList = string | string[];

export const emailAddressListSchema: Schema<EmailAddressList> = s.of<EmailAddressList>(
  s.union([s.string(), s.array(s.string())]),
);
