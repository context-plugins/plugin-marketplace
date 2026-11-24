import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { runtimeProviderSchema, type RuntimeProvider } from "../runtime-provider.js";

export type RuntimeProvider1 = RuntimeProvider;

export const runtimeProvider1Schema: Schema<RuntimeProvider1> = s.of<RuntimeProvider1>(
  s.union([s.lazy(() => runtimeProviderSchema)]),
);
