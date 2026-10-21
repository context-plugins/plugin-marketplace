import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cpu1Schema, type Cpu1 } from "./cpu1.js";
import { disk1Schema, type Disk1 } from "./disk1.js";
import { memory1Schema, type Memory1 } from "./memory1.js";
import { network1Schema, type Network1 } from "./network1.js";
import { system1Schema, type System1 } from "./system1.js";

/** Custom host metric collection settings. */
export type Custom1 = {
  /** Select the level of details for system metrics */
  system?: System1;
  /** Select the level of details for CPU metrics */
  cpu?: Cpu1;
  /** Select the level of details for memory metrics */
  memory?: Memory1;
  /** Select the level of details for network metrics */
  network?: Network1;
  /** Select the level of details for disk metrics */
  disk?: Disk1;
};

export const custom1Schema: Schema<Custom1> = s.object<Custom1>({
  system: s.optional(s.lazy(() => system1Schema)),
  cpu: s.optional(s.lazy(() => cpu1Schema)),
  memory: s.optional(s.lazy(() => memory1Schema)),
  network: s.optional(s.lazy(() => network1Schema)),
  disk: s.optional(s.lazy(() => disk1Schema)),
});
