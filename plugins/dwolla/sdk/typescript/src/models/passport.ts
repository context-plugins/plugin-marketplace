import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Passport = {
  number: string;
  country: string;
};

export const passportSchema: Schema<Passport> = s.object<Passport>({
  number: s.string(),
  country: s.string(),
});
