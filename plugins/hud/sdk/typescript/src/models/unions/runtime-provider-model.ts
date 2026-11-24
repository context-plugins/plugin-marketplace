import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { runtimeProviderNameSchema, type RuntimeProviderName } from "../runtime-provider-name.js";

export type RuntimeProviderModel = RuntimeProviderName;

export const runtimeProviderModelSchema: Schema<RuntimeProviderModel> = s.of<RuntimeProviderModel>(
  s.union([s.lazy(() => runtimeProviderNameSchema)]),
);
