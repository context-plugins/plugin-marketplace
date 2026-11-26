import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AppInstallRequest = {
  /** Version to install */
  targetVersion?: string;
  /** Whether to allow preview versions */
  allowPreviewVersion?: boolean;
  /** Whether the ISV EULA is accepted */
  acceptIsvEula?: boolean;
  /** Whether to also update dependent apps */
  allowDependencyUpdate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appInstallRequestSchema: Schema<AppInstallRequest> = s.object<AppInstallRequest>(
  {
    targetVersion: s.optional(s.string()),
    allowPreviewVersion: s.optional(s.boolean()),
    acceptIsvEula: s.optional(s.boolean()),
    allowDependencyUpdate: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
