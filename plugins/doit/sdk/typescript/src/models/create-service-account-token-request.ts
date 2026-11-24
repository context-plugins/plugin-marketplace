import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Fields of a new API token. */
export type CreateServiceAccountTokenRequest = {
  /**
   * Name, unique among the service account's tokens. Leading or trailing whitespace returns `400`.
   */
  name: string;
  /** When the token should stop authenticating. Omit to let the server set the default expiry. */
  expiresTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createServiceAccountTokenRequestProperties: s.Shape<CreateServiceAccountTokenRequest> = {
  name: s.string(),
  expiresTime: s.optional(s.dateTime()),
};

export const createServiceAccountTokenRequestInternalSchema: Schema<CreateServiceAccountTokenRequest> =
  s.object<CreateServiceAccountTokenRequest>(createServiceAccountTokenRequestProperties, {
    additionalProperties: s.json(),
  });

export const createServiceAccountTokenRequestSchema: Schema<CreateServiceAccountTokenRequest> = s.lazySchema(
  () =>
    s.object<CreateServiceAccountTokenRequest>(
      {
        ...createServiceAccountTokenRequestProperties,
        name: s.string().check(s.minLength(1), s.maxLength(100)),
      },
      { additionalProperties: s.json() },
    ),
);
