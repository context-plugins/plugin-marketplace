import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Caller-safe failure details when the run is in FAILED. */
export type PlatformAgentRunError1 = {
  /** Machine-readable execution failure code. */
  code: string;
  /** Caller-safe execution failure description. */
  message: string;
};

export const platformAgentRunError1Schema: Schema<PlatformAgentRunError1> = s.object<PlatformAgentRunError1>({
  code: s.string(),
  message: s.string(),
});
