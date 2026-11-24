import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { aesMinimalSchema, type AesMinimal } from "./aes-minimal.js";
import { aesSchema, type Aes } from "./aes.js";
import { qesSchema, type Qes } from "./qes.js";
import { sesSchema, type Ses } from "./ses.js";

export type UserSignatureQualitiesResponse = {
  qes?: Qes;
  /** Best possible quality, but AES at a minimum. */
  aesMinimal?: AesMinimal;
  aes?: Aes;
  ses?: Ses;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userSignatureQualitiesResponseSchema: Schema<UserSignatureQualitiesResponse> =
  s.object<UserSignatureQualitiesResponse>(
    {
      qes: s.optional(s.lazy(() => qesSchema)),
      aesMinimal: s.optional(s.lazy(() => aesMinimalSchema)),
      aes: s.optional(s.lazy(() => aesSchema)),
      ses: s.optional(s.lazy(() => sesSchema)),
      _keysMap: {
        aesMinimal: "aes_minimal",
      },
    },
    { additionalProperties: s.json() },
  );
