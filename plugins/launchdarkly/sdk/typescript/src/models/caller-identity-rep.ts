import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CallerIdentityRep = {
  accountId?: string;
  environmentId?: string;
  projectId?: string;
  environmentName?: string;
  projectName?: string;
  authKind?: string;
  tokenKind?: string;
  clientId?: string;
  tokenName?: string;
  tokenId?: string;
  memberId?: string;
  serviceToken?: boolean;
  scopes?: string[];
};

export const callerIdentityRepSchema: Schema<CallerIdentityRep> = s.object<CallerIdentityRep>({
  accountId: s.optional(s.string()),
  environmentId: s.optional(s.string()),
  projectId: s.optional(s.string()),
  environmentName: s.optional(s.string()),
  projectName: s.optional(s.string()),
  authKind: s.optional(s.string()),
  tokenKind: s.optional(s.string()),
  clientId: s.optional(s.string()),
  tokenName: s.optional(s.string()),
  tokenId: s.optional(s.string()),
  memberId: s.optional(s.string()),
  serviceToken: s.optional(s.boolean()),
  scopes: s.optional(s.array(s.string())),
});
