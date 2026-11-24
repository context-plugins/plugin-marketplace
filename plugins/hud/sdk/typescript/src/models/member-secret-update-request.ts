import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MemberSecretUpdateRequest = {
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const memberSecretUpdateRequestSchema: Schema<MemberSecretUpdateRequest> =
  s.object<MemberSecretUpdateRequest>(
    {
      value: s.string(),
    },
    { additionalProperties: s.json() },
  );
