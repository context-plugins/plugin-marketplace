import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildVersionSchema, type BuildVersion } from "./unions/build-version.js";
import { originSchema, type Origin } from "./unions/origin.js";
import { sourceAccess1Schema, type SourceAccess1 } from "./unions/source-access1.js";

/** Environment holding the build a task version targets. */
export type TaskEnvironmentBrief = {
  id: string;
  name: string;
  buildVersion?: BuildVersion;
  origin?: Origin;
  sourceAccess?: SourceAccess1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskEnvironmentBriefSchema: Schema<TaskEnvironmentBrief> = s.object<TaskEnvironmentBrief>(
  {
    id: s.string(),
    name: s.string(),
    buildVersion: s.optional(s.lazy(() => buildVersionSchema)),
    origin: s.optional(s.lazy(() => originSchema)),
    sourceAccess: s.optional(s.lazy(() => sourceAccess1Schema)),
    _keysMap: {
      buildVersion: "build_version",
      sourceAccess: "source_access",
    },
  },
  { additionalProperties: s.json() },
);
