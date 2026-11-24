import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectSchema, type Project } from "./project.js";

export type DynatraceEnvironment = {
  dynatraceEnvironmentId: string;
  accessToken: string;
  environmentUrl: string;
  projects: Project[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dynatraceEnvironmentSchema: Schema<DynatraceEnvironment> = s.object<DynatraceEnvironment>(
  {
    dynatraceEnvironmentId: s.string(),
    accessToken: s.string(),
    environmentUrl: s.string(),
    projects: s.array(s.lazy(() => projectSchema)),
  },
  { additionalProperties: s.json() },
);
