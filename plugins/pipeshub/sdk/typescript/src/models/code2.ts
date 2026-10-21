import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Machine-readable error code.
 *
 * - `HTTP_INTERNAL_SERVER_ERROR` — explicit `InternalServerError` raised by the handler.
 * - `INTERNAL_ERROR` — unhandled exception caught by the global error middleware.
 * - `MIDDLEWARE_ERROR` — the error middleware itself failed while serializing the response.
 */
export const Code2 = {
  HttpInternalServerError: "HTTP_INTERNAL_SERVER_ERROR",
  InternalError: "INTERNAL_ERROR",
  MiddlewareError: "MIDDLEWARE_ERROR",
} as const;
export type Code2 = (typeof Code2)[keyof typeof Code2] | (string & {});

export const code2Schema: EnumSchema<Code2> = s.enumOf<Code2>(Code2);
