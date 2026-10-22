import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";
import { TokenType2, tokenType2Schema } from "./token-type2.js";

export type JourneyDeviceStartResponse = {
  /** Token used for subsequent operations by the client */
  connectToken: string;
  /** @default TokenType2.Bearer */
  tokenType?: TokenType2;
  /** Seconds until the token expires */
  expiresIn: number;
  /** Scopes granted to the client */
  scope?: Scope[];
};

export const journeyDeviceStartResponseSchema: Schema<JourneyDeviceStartResponse> =
  s.object<JourneyDeviceStartResponse>({
    connectToken: s.string(),
    tokenType: s.defaulted(tokenType2Schema, TokenType2.Bearer),
    expiresIn: s.float64(),
    scope: s.optional(s.array(s.lazy(() => scopeSchema))),
  });
