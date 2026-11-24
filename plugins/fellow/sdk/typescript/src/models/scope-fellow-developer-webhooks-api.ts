import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Who the webhook belongs to. 'user' is the authenticated user, the default and the existing
 * behaviour. 'workspace' is the whole account: it receives every matching event with no per-user
 * filter, and each event is delivered once rather than once per attendee. Creating one requires a
 * privileged API key.
 */
export const ScopeFellowDeveloperWebhooksApi = {
  User: "user",
  Workspace: "workspace",
} as const;
export type ScopeFellowDeveloperWebhooksApi =
  | (typeof ScopeFellowDeveloperWebhooksApi)[keyof typeof ScopeFellowDeveloperWebhooksApi]
  | (string & {});

export const scopeFellowDeveloperWebhooksApiSchema: EnumSchema<ScopeFellowDeveloperWebhooksApi> =
  s.enumOf<ScopeFellowDeveloperWebhooksApi>(ScopeFellowDeveloperWebhooksApi);
