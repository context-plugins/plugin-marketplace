import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Caller-safe details of an agent run execution failure. */
export type PlatformAgentRunError = {
  /** Machine-readable execution failure code. */
  code: string;
  /** Caller-safe execution failure description. */
  message: string;
};

export const platformAgentRunErrorSchema: Schema<PlatformAgentRunError> = s.object<PlatformAgentRunError>({
  code: s.string(),
  message: s.string(),
});
