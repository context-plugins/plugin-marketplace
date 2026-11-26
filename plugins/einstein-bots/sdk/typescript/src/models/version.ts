import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusEinsteinBotsApiBetaVersionsApiSchema,
  type StatusEinsteinBotsApiBetaVersionsApi,
} from "./status-einstein-bots-api-beta-versions-api.js";

export type Version = {
  /** API Version number. */
  versionNumber?: string;
  /** API Version status. */
  status?: StatusEinsteinBotsApiBetaVersionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const versionSchema: Schema<Version> = s.object<Version>(
  {
    versionNumber: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusEinsteinBotsApiBetaVersionsApiSchema)),
  },
  { additionalProperties: s.json() },
);
