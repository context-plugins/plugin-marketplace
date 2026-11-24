import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  submittedRuntimeGpuInternalSchema,
  submittedRuntimeGpuSchema,
  type SubmittedRuntimeGpu,
} from "../submitted-runtime-gpu.js";

export type Gpu = SubmittedRuntimeGpu;

export const gpuInternalSchema: Schema<Gpu> = s.of<Gpu>(
  s.union([s.lazy(() => submittedRuntimeGpuInternalSchema)]),
);

export const gpuSchema: Schema<Gpu> = s.lazySchema(() =>
  s.of<Gpu>(s.union([s.lazy(() => submittedRuntimeGpuSchema)])),
);
