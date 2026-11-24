import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kernelSchema, type Kernel } from "./kernel.js";

/** Optional. Jupyter session config. */
export type JupyterConfig2 = {
  /** Optional. Kernel */
  kernel?: Kernel;
  /** Optional. Display name, shown in the Jupyter kernelspec card. */
  displayName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jupyterConfig2Schema: Schema<JupyterConfig2> = s.object<JupyterConfig2>(
  {
    kernel: s.optional(s.lazy(() => kernelSchema)),
    displayName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
