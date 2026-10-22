import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason1Schema, type Reason1 } from "./unions/reason1.js";

export type ResponsesIncompleteDetails = {
  /** The reason why the response is incomplete. */
  reason?: Reason1;
};

export const responsesIncompleteDetailsSchema: Schema<ResponsesIncompleteDetails> =
  s.object<ResponsesIncompleteDetails>({
    reason: s.optional(s.lazy(() => reason1Schema)),
  });
