import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createSessionStatus2Schema, type CreateSessionStatus2 } from "./create-session-status2.js";
import { Type16, type16Schema } from "./type16.js";
import { codeSchema, type Code } from "./unions/code.js";
import { responseBodySchema, type ResponseBody } from "./unions/response-body.js";
import { statusCodeSchema, type StatusCode } from "./unions/status-code.js";

/** The session data received from the payment service. */
export type CreateSession = {
  /** Always `payment-service-session`. @default Type16.PaymentServiceSession */
  type?: Type16;
  /** The status of the response. */
  status: CreateSessionStatus2;
  /** A generic error code that may be returned when the session could not be generated. */
  code?: Code;
  /** The HTTP status code received from the payment service. */
  statusCode?: StatusCode;
  /** The JSON response body received from the payment service. */
  responseBody?: ResponseBody;
};

export const createSessionSchema: Schema<CreateSession> = s.object<CreateSession>({
  type: s.defaulted(type16Schema, Type16.PaymentServiceSession),
  status: createSessionStatus2Schema,
  code: s.optional(s.lazy(() => codeSchema)),
  statusCode: s.optional(s.lazy(() => statusCodeSchema)),
  responseBody: s.optional(s.lazy(() => responseBodySchema)),
  _keysMap: {
    statusCode: "status_code",
    responseBody: "response_body",
  },
});
