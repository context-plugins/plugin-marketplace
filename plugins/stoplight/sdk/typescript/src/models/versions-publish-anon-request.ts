import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { specDataSchema, type SpecData } from "./unions/spec-data.js";

export type VersionsPublishAnonRequest = {
  specData?: SpecData;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const versionsPublishAnonRequestSchema: Schema<VersionsPublishAnonRequest> =
  s.object<VersionsPublishAnonRequest>(
    {
      specData: s.optional(s.lazy(() => specDataSchema)),
      url: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
