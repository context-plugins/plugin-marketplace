import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cpuSchema, type Cpu } from "./cpu.js";
import { diskSchema, type Disk } from "./disk.js";
import { memorySchema, type Memory } from "./memory.js";
import { networkSchema, type Network } from "./network.js";
import { systemSchema, type System } from "./system.js";

/** Custom host metric collection settings. */
export type Custom = {
  /** Select the level of detail for system metrics */
  system?: System;
  /** Select the level of detail for CPU metrics */
  cpu?: Cpu;
  /** Select the level of detail for memory metrics */
  memory?: Memory;
  /** Select the level of detail for network metrics */
  network?: Network;
  /** Select the level of detail for disk metrics */
  disk?: Disk;
};

export const customSchema: Schema<Custom> = s.object<Custom>({
  system: s.optional(s.lazy(() => systemSchema)),
  cpu: s.optional(s.lazy(() => cpuSchema)),
  memory: s.optional(s.lazy(() => memorySchema)),
  network: s.optional(s.lazy(() => networkSchema)),
  disk: s.optional(s.lazy(() => diskSchema)),
});
