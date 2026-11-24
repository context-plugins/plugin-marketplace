import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kernelSchema, type Kernel } from "./kernel.js";

/** Jupyter configuration for an interactive session. */
export type JupyterConfig = {
  /** Optional. Kernel */
  kernel?: Kernel;
  /** Optional. Display name, shown in the Jupyter kernelspec card. */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jupyterConfigSchema: Schema<JupyterConfig> = s.object<JupyterConfig>(
  {
    kernel: s.optional(s.lazy(() => kernelSchema)),
    displayName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
