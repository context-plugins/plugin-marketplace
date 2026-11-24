import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeCircleciProjectApiSchema, type TypeCircleciProjectApi } from "./type-circleci-project-api.js";

export type CheckoutKeyCircleCiRestApiV1SshKeyApi = {
  /** The public SSH key */
  publicKey?: string;
  /** The type of checkout key */
  type?: TypeCircleciProjectApi;
  /** The MD5 fingerprint of the key */
  fingerprint?: string;
  /** Whether this is the preferred key */
  preferred?: boolean;
  /** The login associated with the key */
  login?: string;
  /** When the key was created */
  time?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkoutKeyCircleCiRestApiV1SshKeyApiSchema: Schema<CheckoutKeyCircleCiRestApiV1SshKeyApi> =
  s.object<CheckoutKeyCircleCiRestApiV1SshKeyApi>(
    {
      publicKey: s.optional(s.string()),
      type: s.optional(s.lazy(() => typeCircleciProjectApiSchema)),
      fingerprint: s.optional(s.string()),
      preferred: s.optional(s.boolean()),
      login: s.optional(s.string()),
      time: s.optional(s.dateTime()),
      _keysMap: {
        publicKey: "public_key",
      },
    },
    { additionalProperties: s.json() },
  );
