import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cpuInternalSchema, cpuSchema, type Cpu } from "./unions/cpu.js";
import { gpuInternalSchema, gpuSchema, type Gpu } from "./unions/gpu.js";
import { memoryMbInternalSchema, memoryMbSchema, type MemoryMb } from "./unions/memory-mb.js";
import { osInternalSchema, osSchema, type Os } from "./unions/os.js";
import { storageMbInternalSchema, storageMbSchema, type StorageMb } from "./unions/storage-mb.js";

/**
 * Wire-compatible subset of ``hud.eval.runtime.RuntimeResources``.
 *
 * Hosted runtimes run Linux, so ``os`` accepts only ``linux`` in any case.
 */
export type SubmittedRuntimeResources = {
  cpu?: Cpu;
  memoryMb?: MemoryMb;
  storageMb?: StorageMb;
  gpu?: Gpu;
  os?: Os;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const submittedRuntimeResourcesProperties: s.Shape<SubmittedRuntimeResources> = {
  cpu: s.optional(s.lazy(() => cpuInternalSchema)),
  memoryMb: s.optional(s.lazy(() => memoryMbInternalSchema)),
  storageMb: s.optional(s.lazy(() => storageMbInternalSchema)),
  gpu: s.optional(s.lazy(() => gpuInternalSchema)),
  os: s.optional(s.lazy(() => osInternalSchema)),
  _keysMap: {
    memoryMb: "memory_mb",
    storageMb: "storage_mb",
  },
};

export const submittedRuntimeResourcesInternalSchema: Schema<SubmittedRuntimeResources> =
  s.object<SubmittedRuntimeResources>(submittedRuntimeResourcesProperties, {
    additionalProperties: s.json(),
  });

export const submittedRuntimeResourcesSchema: Schema<SubmittedRuntimeResources> = s.lazySchema(() =>
  s.object<SubmittedRuntimeResources>(
    {
      ...submittedRuntimeResourcesProperties,
      cpu: s.optional(s.lazy(() => cpuSchema)),
      memoryMb: s.optional(s.lazy(() => memoryMbSchema)),
      storageMb: s.optional(s.lazy(() => storageMbSchema)),
      gpu: s.optional(s.lazy(() => gpuSchema)),
      os: s.optional(s.lazy(() => osSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
