import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication7Schema, type Authentication7 } from "./authentication7.js";

export type SplunkAuthenticationToken = {
  /** Discriminator value. */
  authentication?: Authentication7;
  /** Bearer token */
  token: string;
};

export const splunkAuthenticationTokenSchema: Schema<SplunkAuthenticationToken> =
  s.object<SplunkAuthenticationToken>({
    authentication: s.optional(s.lazy(() => authentication7Schema)),
    token: s.string(),
  });
