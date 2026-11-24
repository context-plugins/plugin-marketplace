import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Model, modelSchema } from "./model.js";
import { agentcardwalletidSchema, type Agentcardwalletid } from "./unions/agentcardwalletid.js";
import {
  agenticautofillgrantidSchema,
  type Agenticautofillgrantid,
} from "./unions/agenticautofillgrantid.js";
import { attachedfileidsSchema, type Attachedfileids } from "./unions/attachedfileids.js";
import {
  browserSettingsInternalSchema,
  browserSettingsSchema,
  type BrowserSettings,
} from "./unions/browser-settings.js";
import { judgeInternalSchema, judgeSchema, type Judge } from "./unions/judge.js";
import { keepaliveInternalSchema, keepaliveSchema, type Keepalive } from "./unions/keepalive.js";
import { maxcostusdInternalSchema, maxcostusdSchema, type Maxcostusd } from "./unions/maxcostusd.js";
import { modelparams1Schema, type Modelparams1 } from "./unions/modelparams1.js";
import { opvaultalloweddomainsSchema, type Opvaultalloweddomains } from "./unions/opvaultalloweddomains.js";
import { opvaultidInternalSchema, opvaultidSchema, type Opvaultid } from "./unions/opvaultid.js";
import { outputschema1Schema, type Outputschema1 } from "./unions/outputschema1.js";
import {
  secretbindingsInternalSchema,
  secretbindingsSchema,
  type Secretbindings,
} from "./unions/secretbindings.js";
import { sessionidSchema, type Sessionid } from "./unions/sessionid.js";
import {
  stripelinkconnectionidSchema,
  type Stripelinkconnectionid,
} from "./unions/stripelinkconnectionid.js";
import { workspaceidSchema, type Workspaceid } from "./unions/workspaceid.js";

export type RunCreateRequest = {
  task: string;
  /** Optional JSON Schema for the final output (API runs only). */
  outputSchema?: Outputschema1;
  /**
   * bu-ultrafast and bu-fast are early-access ultrafast presets; they take no modelParams and are
   * rejected for projects without access.
   *
   * @default Model.Gpt6Luna
   */
  model?: Model;
  /**
   * Optional provider-native request parameters for the selected model, written with the provider's
   * own field names and values and forwarded unchanged (e.g. {"reasoning": {"effort": "high"}} for
   * OpenAI, {"thinking": {"type": "adaptive"}} for Anthropic, {"thinkingConfig": {"thinkingLevel":
   * "high"}} for Google). Supported paths and values are per-model; an unsupported path, value, or
   * a model that accepts no parameters at all is rejected with 422. Omitting this field applies the
   * model's default parameters (gpt-6-luna defaults to {"reasoning": {"effort": "high"}}); passing
   * {} opts out of that default and leaves the provider's own defaults in place.
   */
  modelParams?: Modelparams1;
  sessionId?: Sessionid;
  workspaceId?: Workspaceid;
  browserSettings?: BrowserSettings;
  /**
   * Seconds the session's browser stays open after its last run, so a follow-up run reuses the same
   * page, never past the browser's 4 h lifetime. Default 120. Follow-up runs inherit the session's
   * value; send a new value to change it or null to restore the default. Kept time is billed as
   * browser time. Ignored (always 120) for free-tier and Zero Data Retention projects.
   */
  keepAlive?: Keepalive;
  /**
   * If true, provisions a persistent temporary email inbox (via AgentMail) for the run workspace.
   * The agent receives the email address in its context and can send, receive, read, and reply to
   * email. Set false to disable AgentMail for this run.
   *
   * @default false
   */
  agentmail?: boolean;
  agentcardWalletId?: Agentcardwalletid;
  stripeLinkConnectionId?: Stripelinkconnectionid;
  agenticAutofillGrantId?: Agenticautofillgrantid;
  attachedFileIds?: Attachedfileids;
  /**
   * Credentials this run may use without ever seeing them. The agent can ask the server to type a
   * binding by alias on one of its allowed domains; it cannot read the value. Bindings are not
   * persisted past the run.
   */
  secretBindings?: Secretbindings;
  /**
   * A 1Password vault id whose items become typed secrets for this run. The project's connected
   * 1Password integration is resolved server-side; no per-item ids are needed.
   */
  opVaultId?: Opvaultid;
  /**
   * Hosts every credential from opVaultId may be typed into, e.g. ["amazon.com"]. Omit to derive
   * each item's hosts from its own 1Password website entries; items with no website are then
   * skipped and reported in skippedVaultItems. A host covers its subdomains, so 1Password's
   * ExactDomain autofill setting is not honored either way.
   */
  opVaultAllowedDomains?: Opvaultalloweddomains;
  judge?: Judge;
  maxCostUsd?: Maxcostusd;
};

const runCreateRequestProperties: s.Shape<RunCreateRequest> = {
  task: s.string(),
  outputSchema: s.optional(s.lazy(() => outputschema1Schema)),
  model: s.defaulted(modelSchema, Model.Gpt6Luna),
  modelParams: s.optional(s.lazy(() => modelparams1Schema)),
  sessionId: s.optional(s.lazy(() => sessionidSchema)),
  workspaceId: s.optional(s.lazy(() => workspaceidSchema)),
  browserSettings: s.optional(s.lazy(() => browserSettingsInternalSchema)),
  keepAlive: s.optional(s.lazy(() => keepaliveInternalSchema)),
  agentmail: s.defaulted(s.boolean(), false),
  agentcardWalletId: s.optional(s.lazy(() => agentcardwalletidSchema)),
  stripeLinkConnectionId: s.optional(s.lazy(() => stripelinkconnectionidSchema)),
  agenticAutofillGrantId: s.optional(s.lazy(() => agenticautofillgrantidSchema)),
  attachedFileIds: s.optional(s.lazy(() => attachedfileidsSchema)),
  secretBindings: s.optional(s.lazy(() => secretbindingsInternalSchema)),
  opVaultId: s.optional(s.lazy(() => opvaultidInternalSchema)),
  opVaultAllowedDomains: s.optional(s.lazy(() => opvaultalloweddomainsSchema)),
  judge: s.optional(s.lazy(() => judgeInternalSchema)),
  maxCostUsd: s.optional(s.lazy(() => maxcostusdInternalSchema)),
};

export const runCreateRequestInternalSchema: Schema<RunCreateRequest> =
  s.object<RunCreateRequest>(runCreateRequestProperties);

export const runCreateRequestSchema: Schema<RunCreateRequest> = s.lazySchema(() =>
  s.object<RunCreateRequest>({
    ...runCreateRequestProperties,
    task: s.string().check(s.minLength(1)),
    browserSettings: s.optional(s.lazy(() => browserSettingsSchema)),
    keepAlive: s.optional(s.lazy(() => keepaliveSchema)),
    secretBindings: s.optional(s.lazy(() => secretbindingsSchema)),
    opVaultId: s.optional(s.lazy(() => opvaultidSchema)),
    judge: s.optional(s.lazy(() => judgeSchema)),
    maxCostUsd: s.optional(s.lazy(() => maxcostusdSchema)),
  }),
);
