import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GooglePaySessionRequest = {
  /** The domain on which Google Pay is being loaded. */
  originDomain: string;
};

export const googlePaySessionRequestSchema: Schema<GooglePaySessionRequest> =
  s.object<GooglePaySessionRequest>({
    originDomain: s.string(),
    _keysMap: {
      originDomain: "origin_domain",
    },
  });
