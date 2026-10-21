import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Speech-to-text provider for the agent. */
export type SttProvider = string;

export const sttProviderSchema: Schema<SttProvider> = s.of<SttProvider>(s.union([s.string()]));
