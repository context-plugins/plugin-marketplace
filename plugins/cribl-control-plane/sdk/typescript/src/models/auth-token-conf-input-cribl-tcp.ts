import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthTokenConfInputCriblTcp = {
  /** Select or create a stored text secret */
  tokenSecret: string;
  /** Enable token */
  enabled?: boolean;
  /** Optional token description */
  description?: string;
};

export const authTokenConfInputCriblTcpSchema: Schema<AuthTokenConfInputCriblTcp> =
  s.object<AuthTokenConfInputCriblTcp>({
    tokenSecret: s.string(),
    enabled: s.optional(s.boolean()),
    description: s.optional(s.string()),
  });
