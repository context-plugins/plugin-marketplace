import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  submittedRuntimeResourcesInternalSchema,
  submittedRuntimeResourcesSchema,
  type SubmittedRuntimeResources,
} from "../submitted-runtime-resources.js";

export type Resources = SubmittedRuntimeResources;

export const resourcesInternalSchema: Schema<Resources> = s.of<Resources>(
  s.union([s.lazy(() => submittedRuntimeResourcesInternalSchema)]),
);

export const resourcesSchema: Schema<Resources> = s.lazySchema(() =>
  s.of<Resources>(s.union([s.lazy(() => submittedRuntimeResourcesSchema)])),
);
