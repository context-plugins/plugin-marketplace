import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customdata1Schema, type Customdata1 } from "./unions/customdata1.js";

export type NuveiKlarnaOptions = {
  /** Additional data to be sent to Nuvei. */
  customData?: Customdata1;
};

export const nuveiKlarnaOptionsSchema: Schema<NuveiKlarnaOptions> = s.object<NuveiKlarnaOptions>({
  customData: s.optional(s.lazy(() => customdata1Schema)),
});
