import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SdkAgentType = string;

export const sdkAgentTypeSchema: Schema<SdkAgentType> = s.of<SdkAgentType>(s.union([s.string()]));
