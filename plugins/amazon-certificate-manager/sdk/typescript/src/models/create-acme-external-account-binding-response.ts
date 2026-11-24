import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  acmeExternalAccountBindingSchema,
  type AcmeExternalAccountBinding,
} from "./acme-external-account-binding.js";

export type CreateAcmeExternalAccountBindingResponse = {
  externalAccountBinding?: AcmeExternalAccountBinding;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createAcmeExternalAccountBindingResponseSchema: Schema<CreateAcmeExternalAccountBindingResponse> =
  s.object<CreateAcmeExternalAccountBindingResponse>(
    {
      externalAccountBinding: s.optional(s.lazy(() => acmeExternalAccountBindingSchema)),
      _keysMap: {
        externalAccountBinding: "ExternalAccountBinding",
      },
    },
    { additionalProperties: s.json() },
  );
