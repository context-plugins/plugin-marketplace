import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContactLocation = {
  country?: string | null;
  state?: string | null;
  city?: string | null;
};

export const contactLocationSchema: Schema<ContactLocation> = s.object<ContactLocation>({
  country: s.optionalNullable(s.string()),
  state: s.optionalNullable(s.string()),
  city: s.optionalNullable(s.string()),
});
