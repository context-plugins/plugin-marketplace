import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { configInternalSchema, configSchema, type Config } from "../config.js";
import { config1InternalSchema, config1Schema, type Config1 } from "../config1.js";

export type Config2 = Config | Config1;

export const config2InternalSchema: Schema<Config2> = s.of<Config2>(
  s.union([s.lazy(() => configInternalSchema), s.lazy(() => config1InternalSchema)]),
);

export const config2Schema: Schema<Config2> = s.lazySchema(() =>
  s.of<Config2>(s.union([s.lazy(() => configSchema), s.lazy(() => config1Schema)])),
);
