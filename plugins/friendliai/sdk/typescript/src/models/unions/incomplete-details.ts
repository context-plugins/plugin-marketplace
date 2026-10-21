import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responsesIncompleteDetailsSchema,
  type ResponsesIncompleteDetails,
} from "../responses-incomplete-details.js";

/** Details about why the response is incomplete. */
export type IncompleteDetails = ResponsesIncompleteDetails;

export const incompleteDetailsSchema: Schema<IncompleteDetails> = s.of<IncompleteDetails>(
  s.union([s.lazy(() => responsesIncompleteDetailsSchema)]),
);
