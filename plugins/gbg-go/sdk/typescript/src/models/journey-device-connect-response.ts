import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { TokenType, tokenTypeSchema } from "./token-type.js";

export type JourneyDeviceConnectResponse = {
  /** Token used for subsequent operations by the client */
  endUserToken?: string;
  /** @default TokenType.Bearer */
  tokenType?: TokenType;
  /** Seconds until the token expires */
  expiresIn: number;
};

export const journeyDeviceConnectResponseSchema: Schema<JourneyDeviceConnectResponse> =
  s.object<JourneyDeviceConnectResponse>({
    endUserToken: s.optional(s.string()),
    tokenType: s.defaulted(tokenTypeSchema, TokenType.Bearer),
    expiresIn: s.float64(),
  });
