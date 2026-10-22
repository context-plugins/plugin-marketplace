import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { skipthreedsecureSchema, type Skipthreedsecure } from "./unions/skipthreedsecure.js";

export type PowertranzOptions = {
  /** Indicates to PowerTranz whether to skip the 3DS authentication for this transaction. */
  skipThreeDSecure?: Skipthreedsecure;
};

export const powertranzOptionsSchema: Schema<PowertranzOptions> = s.object<PowertranzOptions>({
  skipThreeDSecure: s.optional(s.lazy(() => skipthreedsecureSchema)),
});
