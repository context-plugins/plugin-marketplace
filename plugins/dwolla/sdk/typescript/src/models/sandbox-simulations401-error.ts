import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxSimulations401Error = {
  code?: string;
  message?: string;
};

export const sandboxSimulations401ErrorSchema: Schema<SandboxSimulations401Error> =
  s.object<SandboxSimulations401Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
