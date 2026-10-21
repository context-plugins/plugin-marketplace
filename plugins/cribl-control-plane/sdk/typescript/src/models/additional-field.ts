import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalField = {
  /** Field name in which to find an IP to look up. Can be nested. */
  extraInField: string;
  /** Field name in which to store the GeoIP lookup results */
  extraOutField: string;
};

export const additionalFieldSchema: Schema<AdditionalField> = s.object<AdditionalField>({
  extraInField: s.string(),
  extraOutField: s.string(),
});
