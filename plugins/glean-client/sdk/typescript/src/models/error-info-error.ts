import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorMessageSchema, type ErrorMessage } from "./error-message.js";
import {
  invalidOperatorValueErrorSchema,
  type InvalidOperatorValueError,
} from "./invalid-operator-value-error.js";

export type ErrorInfoError = {
  /** Indicates the gmail results could not be fetched due to bad token. */
  badGmailToken?: boolean;
  /** Indicates the outlook results could not be fetched due to bad token. */
  badOutlookToken?: boolean;
  /** Indicates results could not be fetched due to invalid operators in the query. */
  invalidOperators?: InvalidOperatorValueError[];
  errorMessages?: ErrorMessage[];
  /** Indicates the federated search results could not be fetched due to rate limiting. */
  federatedSearchRateLimitError?: boolean;
};

export const errorInfoErrorSchema: Schema<ErrorInfoError> = s.object<ErrorInfoError>({
  badGmailToken: s.optional(s.boolean()),
  badOutlookToken: s.optional(s.boolean()),
  invalidOperators: s.optional(s.array(s.lazy(() => invalidOperatorValueErrorSchema))),
  errorMessages: s.optional(s.array(s.lazy(() => errorMessageSchema))),
  federatedSearchRateLimitError: s.optional(s.boolean()),
});
