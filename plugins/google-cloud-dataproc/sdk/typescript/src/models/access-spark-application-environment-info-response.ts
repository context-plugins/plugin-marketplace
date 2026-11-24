import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  applicationEnvironmentInfoSchema,
  type ApplicationEnvironmentInfo,
} from "./application-environment-info.js";

/** Environment details of a Saprk Application. */
export type AccessSparkApplicationEnvironmentInfoResponse = {
  /** Details about the Environment that the application is running in. */
  applicationEnvironmentInfo?: ApplicationEnvironmentInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessSparkApplicationEnvironmentInfoResponseSchema: Schema<AccessSparkApplicationEnvironmentInfoResponse> =
  s.object<AccessSparkApplicationEnvironmentInfoResponse>(
    {
      applicationEnvironmentInfo: s.optional(s.lazy(() => applicationEnvironmentInfoSchema)),
    },
    { additionalProperties: s.json() },
  );
