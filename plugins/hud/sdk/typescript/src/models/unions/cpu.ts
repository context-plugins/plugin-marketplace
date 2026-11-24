import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Cpu = number;

export const cpuInternalSchema: Schema<Cpu> = s.of<Cpu>(s.union([s.float64()]));

export const cpuSchema: Schema<Cpu> = s.lazySchema(() => s.of<Cpu>(s.union([s.float64().check(s.gt(0))])));
