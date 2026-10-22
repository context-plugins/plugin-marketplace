import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthTokenConfOutputCriblHttp = {
  /** Select or create a stored text secret */
  tokenSecret: string;
  /** Enable token */
  enabled?: boolean;
  /** Description */
  description?: string;
};

export const authTokenConfOutputCriblHttpSchema: Schema<AuthTokenConfOutputCriblHttp> =
  s.object<AuthTokenConfOutputCriblHttp>({
    tokenSecret: s.string(),
    enabled: s.optional(s.boolean()),
    description: s.optional(s.string()),
  });
