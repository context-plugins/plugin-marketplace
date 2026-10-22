import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApplePaySessionRequest = {
  /** The validation URL as provided by the Apple SDK when processing a payment. */
  validationUrl: string;
  /** The domain on which Apple Pay is being loaded. */
  domainName: string;
};

export const applePaySessionRequestSchema: Schema<ApplePaySessionRequest> = s.object<ApplePaySessionRequest>({
  validationUrl: s.string(),
  domainName: s.string(),
  _keysMap: {
    validationUrl: "validation_url",
    domainName: "domain_name",
  },
});
