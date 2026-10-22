import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Creator1 = {
  id: string;
  name: string;
  emailAddress: string;
};

export const creator1Schema: Schema<Creator1> = s.object<Creator1>({
  id: s.string(),
  name: s.string(),
  emailAddress: s.string(),
  _keysMap: {
    emailAddress: "email_address",
  },
});
