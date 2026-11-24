import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SdkGeneration = string;

export const sdkGenerationSchema: Schema<SdkGeneration> = s.of<SdkGeneration>(s.union([s.string()]));
