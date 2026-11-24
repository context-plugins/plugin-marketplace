import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeCircleciProjectApiSchema, type TypeCircleciProjectApi } from "./type-circleci-project-api.js";

export type CheckoutKey = {
  /** The public SSH key */
  publicKey?: string;
  /** The type of checkout key */
  type?: TypeCircleciProjectApi;
  /** The MD5 fingerprint of the key */
  fingerprint?: string;
  /** Whether this is the preferred checkout key */
  preferred?: boolean;
  /** When the key was created */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutKeySchema: Schema<CheckoutKey> = s.object<CheckoutKey>(
  {
    publicKey: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeCircleciProjectApiSchema)),
    fingerprint: s.optional(s.string()),
    preferred: s.optional(s.boolean()),
    createdAt: s.optional(s.dateTime()),
    _keysMap: {
      publicKey: "public-key",
      createdAt: "created-at",
    },
  },
  { additionalProperties: s.json() },
);
