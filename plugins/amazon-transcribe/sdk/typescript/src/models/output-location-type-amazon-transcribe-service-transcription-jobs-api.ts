import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where the specified transcription output is stored. If the value is CUSTOMER_BUCKET,
 * the location is the Amazon S3 bucket you specified using the OutputBucketName parameter in your
 * request. If you also included OutputKey in your request, your output is located in the path you
 * specified in your request. If the value is SERVICE_BUCKET, the location is a service-managed
 * Amazon S3 bucket. To access a transcript stored in a service-managed bucket, use the URI shown in
 * the TranscriptFileUri or RedactedTranscriptFileUri field.
 */
export const OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi = {
  CustomerBucket: "CUSTOMER_BUCKET",
  ServiceBucket: "SERVICE_BUCKET",
} as const;
export type OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi =
  | (typeof OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi)[keyof typeof OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi]
  | (string & {});

export const outputLocationTypeAmazonTranscribeServiceTranscriptionJobsApiSchema: EnumSchema<OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi> =
  s.enumOf<OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi>(
    OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi,
  );
