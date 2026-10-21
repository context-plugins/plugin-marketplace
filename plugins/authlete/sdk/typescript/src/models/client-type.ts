import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The client type, either `CONFIDENTIAL` or `PUBLIC`. See [RFC 6749, 2.1. Client
 * Types](https://datatracker.ietf.org/doc/html/rfc6749#section-2.1) for details.
 */
export const ClientType = {
  Public: "PUBLIC",
  Confidential: "CONFIDENTIAL",
} as const;
export type ClientType = (typeof ClientType)[keyof typeof ClientType] | (string & {});

export const clientTypeSchema: EnumSchema<ClientType> = s.enumOf<ClientType>(ClientType);
