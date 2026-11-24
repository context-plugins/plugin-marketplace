import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Default lead, or purchase when only a url or domain is given. */
export const ContextJidScreenApi = {
  Lead: "lead",
  InboundEmail: "inbound_email",
  Partnership: "partnership",
  Vendor: "vendor",
  Purchase: "purchase",
  MarketplaceSeller: "marketplace_seller",
  AgentAction: "agent_action",
} as const;
export type ContextJidScreenApi =
  | (typeof ContextJidScreenApi)[keyof typeof ContextJidScreenApi]
  | (string & {});

export const contextJidScreenApiSchema: EnumSchema<ContextJidScreenApi> =
  s.enumOf<ContextJidScreenApi>(ContextJidScreenApi);
