import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request to redirect a QRCode */
export type RedirectQrCodeRequest = {
  longUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const redirectQrCodeRequestSchema: Schema<RedirectQrCodeRequest> = s.object<RedirectQrCodeRequest>(
  {
    longUrl: s.string(),
    _keysMap: {
      longUrl: "long_url",
    },
  },
  { additionalProperties: s.json() },
);
