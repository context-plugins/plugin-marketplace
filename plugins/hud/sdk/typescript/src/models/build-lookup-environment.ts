import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { originSchema, type Origin } from "./unions/origin.js";

export type BuildLookupEnvironment = {
  id: string;
  name: string;
  projectId: string;
  origin?: Origin;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildLookupEnvironmentSchema: Schema<BuildLookupEnvironment> = s.object<BuildLookupEnvironment>(
  {
    id: s.string(),
    name: s.string(),
    projectId: s.string(),
    origin: s.optional(s.lazy(() => originSchema)),
    _keysMap: {
      projectId: "project_id",
    },
  },
  { additionalProperties: s.json() },
);
