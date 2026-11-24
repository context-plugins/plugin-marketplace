import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformTypeSchema, type PlatformType } from "./platform-type.js";

export type ApiV1AnalyticsSocialAccountForceRequest = {
  teamId: string;
  platformType: PlatformType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1AnalyticsSocialAccountForceRequestSchema: Schema<ApiV1AnalyticsSocialAccountForceRequest> =
  s.object<ApiV1AnalyticsSocialAccountForceRequest>(
    {
      teamId: s.string(),
      platformType: platformTypeSchema,
    },
    { additionalProperties: s.json() },
  );
