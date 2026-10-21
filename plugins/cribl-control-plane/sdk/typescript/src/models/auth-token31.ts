import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthToken31 = {
  /** Discriminator value. @default "secret" */
  authType?: "secret";
  /** Select or create a stored text secret */
  tokenSecret: string;
};

export const authToken31Schema: Schema<AuthToken31> = s.object<AuthToken31>({
  authType: s.defaulted(s.literal("secret"), "secret"),
  tokenSecret: s.string(),
});
