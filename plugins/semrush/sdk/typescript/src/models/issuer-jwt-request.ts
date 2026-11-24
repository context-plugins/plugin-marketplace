import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IssuerJwtRequest = {
  /**
   * JWT by
   * [specification](https://www.semrush.com/apps/docs/server-to-server-api/bearer-token#generate-a-jwt),
   * signed by your secret key
   */
  jwt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const issuerJwtRequestSchema: Schema<IssuerJwtRequest> = s.object<IssuerJwtRequest>(
  {
    jwt: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
