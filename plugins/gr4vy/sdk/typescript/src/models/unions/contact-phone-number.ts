import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeMobileNumberSchema, type PazeMobileNumber } from "../paze-mobile-number.js";

export type ContactPhoneNumber = PazeMobileNumber;

export const contactPhoneNumberSchema: Schema<ContactPhoneNumber> = s.of<ContactPhoneNumber>(
  s.union([s.lazy(() => pazeMobileNumberSchema)]),
);
