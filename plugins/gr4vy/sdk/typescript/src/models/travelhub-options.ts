import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companynameModelSchema, type CompanynameModel } from "./unions/companyname-model.js";
import { customdata3Schema, type Customdata3 } from "./unions/customdata3.js";

export type TravelhubOptions = {
  /** A list of `customData` to pass to the TravelHub API. */
  customData?: Customdata3;
  /** Customer company name to pass to the TravelHub API. */
  companyName?: CompanynameModel;
};

export const travelhubOptionsSchema: Schema<TravelhubOptions> = s.object<TravelhubOptions>({
  customData: s.optional(s.lazy(() => customdata3Schema)),
  companyName: s.optional(s.lazy(() => companynameModelSchema)),
});
