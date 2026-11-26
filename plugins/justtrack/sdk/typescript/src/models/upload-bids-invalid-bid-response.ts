import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  invalidBidOutputInternalSchema,
  invalidBidOutputSchema,
  type InvalidBidOutput,
} from "./invalid-bid-output.js";

export type UploadBidsInvalidBidResponse = {
  /** description of the error */
  error: string;
  bidsValidation: InvalidBidOutput[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const uploadBidsInvalidBidResponseProperties: s.Shape<UploadBidsInvalidBidResponse> = {
  error: s.string(),
  bidsValidation: s.array(s.lazy(() => invalidBidOutputInternalSchema)),
};

export const uploadBidsInvalidBidResponseInternalSchema: Schema<UploadBidsInvalidBidResponse> =
  s.object<UploadBidsInvalidBidResponse>(uploadBidsInvalidBidResponseProperties, {
    additionalProperties: s.json(),
  });

export const uploadBidsInvalidBidResponseSchema: Schema<UploadBidsInvalidBidResponse> = s.lazySchema(() =>
  s.object<UploadBidsInvalidBidResponse>(
    {
      ...uploadBidsInvalidBidResponseProperties,
      error: s.string().check(s.minLength(1)),
      bidsValidation: s.array(s.lazy(() => invalidBidOutputSchema)).check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
