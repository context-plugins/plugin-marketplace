import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1Secret3Schema,
  type GoogleCloudApihubV1Secret3,
} from "./google-cloud-apihub-v1-secret3.js";

/** Parameters to support Username and Password Authentication. */
export type GoogleCloudApihubV1UserPasswordConfig = {
  /**
   * Required. Secret version reference containing the password. The `secretmanager.versions.access`
   * permission should be granted to the service account accessing the secret.
   */
  password?: GoogleCloudApihubV1Secret3;
  /** Required. Username. */
  username?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1UserPasswordConfigSchema: Schema<GoogleCloudApihubV1UserPasswordConfig> =
  s.object<GoogleCloudApihubV1UserPasswordConfig>(
    {
      password: s.optional(s.lazy(() => googleCloudApihubV1Secret3Schema)),
      username: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
