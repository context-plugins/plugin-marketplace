import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { providerSchema, type Provider } from "./provider.js";
import { typePlatformPayeesApiSchema, type TypePlatformPayeesApi } from "./type-platform-payees-api.js";

/** Details specific to digital wallet payees. */
export type DigitalWalletPayeeDetails = {
  /** The name associated with the digital wallet. */
  name?: string;
  /** The identifier for the digital wallet (email, phone, etc.). */
  identifier?: string;
  /** The type of identifier. */
  type?: TypePlatformPayeesApi;
  /** The digital wallet provider. */
  provider?: Provider;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const digitalWalletPayeeDetailsSchema: Schema<DigitalWalletPayeeDetails> =
  s.object<DigitalWalletPayeeDetails>(
    {
      name: s.optional(s.string()),
      identifier: s.optional(s.string()),
      type: s.optional(s.lazy(() => typePlatformPayeesApiSchema)),
      provider: s.optional(s.lazy(() => providerSchema)),
    },
    { additionalProperties: s.json() },
  );
