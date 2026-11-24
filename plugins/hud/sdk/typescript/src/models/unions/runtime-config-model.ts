import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  submittedRuntimeConfigInternalSchema,
  submittedRuntimeConfigSchema,
  type SubmittedRuntimeConfig,
} from "../submitted-runtime-config.js";

export type RuntimeConfigModel = SubmittedRuntimeConfig;

export const runtimeConfigModelInternalSchema: Schema<RuntimeConfigModel> = s.of<RuntimeConfigModel>(
  s.union([s.lazy(() => submittedRuntimeConfigInternalSchema)]),
);

export const runtimeConfigModelSchema: Schema<RuntimeConfigModel> = s.lazySchema(() =>
  s.of<RuntimeConfigModel>(s.union([s.lazy(() => submittedRuntimeConfigSchema)])),
);
