import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CpuMillicores = number;

export const cpuMillicoresSchema: Schema<CpuMillicores> = s.of<CpuMillicores>(s.union([s.int()]));
