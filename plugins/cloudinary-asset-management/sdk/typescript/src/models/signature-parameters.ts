import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignatureParameters = {
  /**
   * The API key to use for the request. This is automatically computed by the Cloudinary's SDKs.
   */
  apiKey?: string;
  /**
   * The timestamp to use for the request in unix time. This is automatically computed by the
   * Cloudinary's SDKs.
   */
  timestamp?: number;
  /**
   * (Required for signed REST API calls) Used to authenticate the request and based on the
   * parameters you use in the request. When using the Cloudinary SDKs for signed requests, the
   * signature is automatically generated and added to the request. If you manually generate your
   * own signed POST request, you need to manually generate the signature parameter and add it to
   * the request together with the api_key and timestamp parameters.
   */
  signature?: string;
};

export const signatureParametersSchema: Schema<SignatureParameters> = s.object<SignatureParameters>({
  apiKey: s.optional(s.string()),
  timestamp: s.optional(s.int()),
  signature: s.optional(s.string()),
  _keysMap: {
    apiKey: "api_key",
  },
});
