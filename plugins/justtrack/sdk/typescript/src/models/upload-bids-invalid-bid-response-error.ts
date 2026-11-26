import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  invalidBidOutputInternalSchema,
  invalidBidOutputSchema,
  type InvalidBidOutput,
} from "./invalid-bid-output.js";

export type UploadBidsInvalidBidResponseError = {
  /** description of the error */
  error: string;
  bidsValidation: InvalidBidOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const uploadBidsInvalidBidResponseErrorProperties: s.Shape<UploadBidsInvalidBidResponseError> = {
  error: s.string(),
  bidsValidation: s.array(s.lazy(() => invalidBidOutputInternalSchema)),
};

export const uploadBidsInvalidBidResponseErrorInternalSchema: Schema<UploadBidsInvalidBidResponseError> =
  s.object<UploadBidsInvalidBidResponseError>(uploadBidsInvalidBidResponseErrorProperties, {
    additionalProperties: s.json(),
  });

export const uploadBidsInvalidBidResponseErrorSchema: Schema<UploadBidsInvalidBidResponseError> =
  s.lazySchema(() =>
    s.object<UploadBidsInvalidBidResponseError>(
      {
        ...uploadBidsInvalidBidResponseErrorProperties,
        error: s.string().check(s.minLength(1)),
        bidsValidation: s.array(s.lazy(() => invalidBidOutputSchema)).check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
