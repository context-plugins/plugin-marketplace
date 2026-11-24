import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Best possible quality, but AES at a minimum. */
export type AesMinimal = {
  /** Effective quality when requesting AES_MINIMAL with ZERTES legislation. */
  zertes?: string;
  /** Effective quality when requesting AES_MINIMAL with eIDAS legislation. */
  eidas?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const aesMinimalSchema: Schema<AesMinimal> = s.object<AesMinimal>(
  {
    zertes: s.optional(s.string()),
    eidas: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
