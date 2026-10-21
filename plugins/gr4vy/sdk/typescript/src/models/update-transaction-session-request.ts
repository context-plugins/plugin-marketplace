import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payloadSchema, type Payload } from "./unions/payload.js";

export type UpdateTransactionSessionRequest = {
  /**
   * Payload that may be required to update a payment provider's client session, depending on the
   * connector.
   */
  payload?: Payload;
};

export const updateTransactionSessionRequestSchema: Schema<UpdateTransactionSessionRequest> =
  s.object<UpdateTransactionSessionRequest>({
    payload: s.optional(s.lazy(() => payloadSchema)),
  });
