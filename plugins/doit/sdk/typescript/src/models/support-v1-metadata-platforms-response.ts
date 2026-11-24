import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformApiSchema, type PlatformApi } from "./platform-api.js";

export type SupportV1MetadataPlatformsResponse = {
  platforms?: PlatformApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supportV1MetadataPlatformsResponseSchema: Schema<SupportV1MetadataPlatformsResponse> =
  s.object<SupportV1MetadataPlatformsResponse>(
    {
      platforms: s.optional(s.array(s.lazy(() => platformApiSchema))),
    },
    { additionalProperties: s.json() },
  );
