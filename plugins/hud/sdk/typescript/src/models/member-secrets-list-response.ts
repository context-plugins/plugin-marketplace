import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { memberSecretItemSchema, type MemberSecretItem } from "./member-secret-item.js";

export type MemberSecretsListResponse = {
  secrets: MemberSecretItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const memberSecretsListResponseSchema: Schema<MemberSecretsListResponse> =
  s.object<MemberSecretsListResponse>(
    {
      secrets: s.array(s.lazy(() => memberSecretItemSchema)),
    },
    { additionalProperties: s.json() },
  );
