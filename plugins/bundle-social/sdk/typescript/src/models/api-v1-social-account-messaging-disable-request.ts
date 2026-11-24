import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type9Schema, type Type9 } from "./type9.js";

export type ApiV1SocialAccountMessagingDisableRequest = {
  teamId: string;
  type: Type9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountMessagingDisableRequestSchema: Schema<ApiV1SocialAccountMessagingDisableRequest> =
  s.object<ApiV1SocialAccountMessagingDisableRequest>(
    {
      teamId: s.string(),
      type: type9Schema,
    },
    { additionalProperties: s.json() },
  );
