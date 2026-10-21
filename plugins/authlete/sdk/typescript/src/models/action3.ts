import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The next action that the authorization server implementation should take. Any other value other
 * than "CREATED" should be handled as unsuccessful result.
 */
export const Action3 = {
  Created: "CREATED",
  BadRequest: "BAD_REQUEST",
  Unauthorized: "UNAUTHORIZED",
  Forbidden: "FORBIDDEN",
  PayloadTooLarge: "PAYLOAD_TOO_LARGE",
  InternalServerError: "INTERNAL_SERVER_ERROR",
} as const;
export type Action3 = (typeof Action3)[keyof typeof Action3] | (string & {});

export const action3Schema: EnumSchema<Action3> = s.enumOf<Action3>(Action3);
