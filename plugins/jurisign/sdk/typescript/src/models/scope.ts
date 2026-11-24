import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Scope = {
  DocumentsRead: "documents:read",
  DocumentsWrite: "documents:write",
  SignRequestsRead: "sign-requests:read",
  SignRequestsWrite: "sign-requests:write",
  WebhooksManage: "webhooks:manage",
} as const;
export type Scope = (typeof Scope)[keyof typeof Scope] | (string & {});

export const scopeSchema: EnumSchema<Scope> = s.enumOf<Scope>(Scope);
