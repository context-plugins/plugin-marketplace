import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userSchema, type User } from "./user.js";

export type BusinessDiscoveryResponse = {
  businessDiscovery?: User;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const businessDiscoveryResponseSchema: Schema<BusinessDiscoveryResponse> =
  s.object<BusinessDiscoveryResponse>(
    {
      businessDiscovery: s.optional(s.lazy(() => userSchema)),
      _keysMap: {
        businessDiscovery: "business_discovery",
      },
    },
    { additionalProperties: s.json() },
  );
