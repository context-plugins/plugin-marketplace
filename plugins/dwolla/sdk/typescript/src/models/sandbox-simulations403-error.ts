import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SandboxSimulations403Error = {
  code?: string;
  message?: string;
};

export const sandboxSimulations403ErrorSchema: Schema<SandboxSimulations403Error> =
  s.object<SandboxSimulations403Error>({
    code: s.optional(s.string()),
    message: s.optional(s.string()),
  });
