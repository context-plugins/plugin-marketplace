import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type9Schema, type Type9 } from "./type9.js";

export type ApiV1SocialAccountMessagingEnableRequest = {
  teamId: string;
  type: Type9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountMessagingEnableRequestSchema: Schema<ApiV1SocialAccountMessagingEnableRequest> =
  s.object<ApiV1SocialAccountMessagingEnableRequest>(
    {
      teamId: s.string(),
      type: type9Schema,
    },
    { additionalProperties: s.json() },
  );
