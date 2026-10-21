import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication8Schema, type Authentication8 } from "./authentication8.js";

export type SplunkAuthenticationTokenSecret = {
  /** Discriminator value. */
  authentication?: Authentication8;
  /** Select or create a stored secret that references your Bearer token */
  tokenSecret: string;
};

export const splunkAuthenticationTokenSecretSchema: Schema<SplunkAuthenticationTokenSecret> =
  s.object<SplunkAuthenticationTokenSecret>({
    authentication: s.optional(s.lazy(() => authentication8Schema)),
    tokenSecret: s.string(),
  });
