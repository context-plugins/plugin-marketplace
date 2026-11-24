import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectDataPointSchema, type ProjectDataPoint } from "./project-data-point.js";

export type ResultsWithProjectData = {
  evaluations: ProjectDataPoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultsWithProjectDataSchema: Schema<ResultsWithProjectData> = s.object<ResultsWithProjectData>(
  {
    evaluations: s.array(s.lazy(() => projectDataPointSchema)),
  },
  { additionalProperties: s.json() },
);
