import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  submittedComposeProjectInternalSchema,
  submittedComposeProjectSchema,
  type SubmittedComposeProject,
} from "../submitted-compose-project.js";

export type Compose = SubmittedComposeProject;

export const composeInternalSchema: Schema<Compose> = s.of<Compose>(
  s.union([s.lazy(() => submittedComposeProjectInternalSchema)]),
);

export const composeSchema: Schema<Compose> = s.lazySchema(() =>
  s.of<Compose>(s.union([s.lazy(() => submittedComposeProjectSchema)])),
);
