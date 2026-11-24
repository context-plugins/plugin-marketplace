import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MemoryMb = number;

export const memoryMbInternalSchema: Schema<MemoryMb> = s.of<MemoryMb>(s.union([s.int()]));

export const memoryMbSchema: Schema<MemoryMb> = s.lazySchema(() =>
  s.of<MemoryMb>(s.union([s.int().check(s.gt(0))])),
);
