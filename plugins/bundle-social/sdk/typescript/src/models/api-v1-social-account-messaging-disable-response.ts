import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messagingStatusSchema, type MessagingStatus } from "./messaging-status.js";
import { type9Schema, type Type9 } from "./type9.js";

export type ApiV1SocialAccountMessagingDisableResponse = {
  socialAccountId: string;
  type: Type9;
  messagingStatus: MessagingStatus;
  messagingLastError: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountMessagingDisableResponseSchema: Schema<ApiV1SocialAccountMessagingDisableResponse> =
  s.object<ApiV1SocialAccountMessagingDisableResponse>(
    {
      socialAccountId: s.string(),
      type: type9Schema,
      messagingStatus: messagingStatusSchema,
      messagingLastError: s.nullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
