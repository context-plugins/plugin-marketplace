import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StartupTimeoutS = number;

export const startupTimeoutSInternalSchema: Schema<StartupTimeoutS> = s.of<StartupTimeoutS>(
  s.union([s.int()]),
);

export const startupTimeoutSSchema: Schema<StartupTimeoutS> = s.lazySchema(() =>
  s.of<StartupTimeoutS>(s.union([s.int().check(s.gt(0))])),
);
