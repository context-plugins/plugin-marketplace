import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promptLlmProvider2Schema, type PromptLlmProvider2 } from "./prompt-llm-provider2.js";
import { apiVersionSchema, type ApiVersion } from "./unions/api-version.js";
import { fallback1Schema, type Fallback1 } from "./unions/fallback1.js";
import { replacementSchema, type Replacement } from "./unions/replacement.js";
import { statusSchema, type Status } from "./unions/status.js";
import { sunsetDate1Schema, type SunsetDate1 } from "./unions/sunset-date1.js";
import { version5Schema, type Version5 } from "./unions/version5.js";

/** LLM config option that can be used on a prompt. */
export type SupportedLlm = {
  /** Provider of the LLM model. */
  provider?: PromptLlmProvider2;
  /** Name of the model. Must match the deployment name in Azure AI Studio. @default "gpt-4o" */
  model?: string;
  /** Display name of the model. This is used for display purposes in the Console UI. */
  displayName: string;
  /**
   * Deprecated model version retained for backward compatibility.
   *
   * @deprecated
   */
  version?: Version5;
  /** Version of the provider's API. */
  apiVersion?: ApiVersion;
  /** Whether the model is in the deprecation warning window. */
  deprecated: boolean;
  /** Date the model becomes retired and can no longer be saved or selected. */
  sunsetDate?: SunsetDate1;
  /** Whether the model is force-retired regardless of sunset_date. @default false */
  removed?: boolean;
  /** Model substituted at runtime for critical features once this one is retired. */
  fallback?: Fallback1;
  /** Provider-recommended replacement for this model version; no automatic substitution. */
  replacement?: Replacement;
  /**
   * Effective lifecycle status, resolved server-side against the current date. Populated on API
   * responses; unset in the static catalog.
   */
  status?: Status;
};

export const supportedLlmSchema: Schema<SupportedLlm> = s.object<SupportedLlm>({
  provider: s.optional(s.lazy(() => promptLlmProvider2Schema)),
  model: s.defaulted(s.string(), "gpt-4o"),
  displayName: s.string(),
  version: s.optional(s.lazy(() => version5Schema)),
  apiVersion: s.optional(s.lazy(() => apiVersionSchema)),
  deprecated: s.boolean(),
  sunsetDate: s.optional(s.lazy(() => sunsetDate1Schema)),
  removed: s.defaulted(s.boolean(), false),
  fallback: s.optional(s.lazy(() => fallback1Schema)),
  replacement: s.optional(s.lazy(() => replacementSchema)),
  status: s.optional(s.lazy(() => statusSchema)),
  _keysMap: {
    displayName: "display_name",
    apiVersion: "api_version",
    sunsetDate: "sunset_date",
  },
});
