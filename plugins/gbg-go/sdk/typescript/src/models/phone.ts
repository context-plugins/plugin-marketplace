import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Phone = {
  /** The type of phone number, such as landline, mobile, fax, unknown etc */
  type: string;
  /** Phone number, ideally in international format with +(Country Code) */
  number: string;
};

export const phoneSchema: Schema<Phone> = s.object<Phone>({
  type: s.string(),
  number: s.string(),
});
