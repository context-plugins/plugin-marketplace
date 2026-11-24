import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobStatus18Schema, type JobStatus18 } from "./job-status18.js";

export type StartDocumentClassificationJobResponse = {
  /**
   * The identifier generated for the job. To get the status of the job, use this identifier with
   * the DescribeDocumentClassificationJob operation.
   */
  jobId?: string;
  /**
   * The Amazon Resource Name (ARN) of the document classification job. It is a unique, fully
   * qualified identifier for the job. It includes the Amazon Web Services account, Amazon Web
   * Services Region, and the job ID. The format of the ARN is as follows:
   * arn::comprehend:::document-classification-job/ The following is an example job ARN:
   * arn:aws:comprehend:us-west-2:111122223333:document-classification-job/1234abcd12ab34cd56ef1234567890ab
   */
  jobArn?: string;
  /**
   * The status of the job: SUBMITTED - The job has been received and queued for processing.
   * IN_PROGRESS - Amazon Comprehend is processing the job. COMPLETED - The job was successfully
   * completed and the output is available. FAILED - The job did not complete. For details, use the
   * DescribeDocumentClassificationJob operation. STOP_REQUESTED - Amazon Comprehend has received a
   * stop request for the job and is processing the request. STOPPED - The job was successfully
   * stopped without completing.
   */
  jobStatus?: JobStatus18;
  /** The ARN of the custom classification model. */
  documentClassifierArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startDocumentClassificationJobResponseSchema: Schema<StartDocumentClassificationJobResponse> =
  s.object<StartDocumentClassificationJobResponse>(
    {
      jobId: s.optional(s.string()),
      jobArn: s.optional(s.string()),
      jobStatus: s.optional(s.lazy(() => jobStatus18Schema)),
      documentClassifierArn: s.optional(s.string()),
      _keysMap: {
        jobId: "JobId",
        jobArn: "JobArn",
        jobStatus: "JobStatus",
        documentClassifierArn: "DocumentClassifierArn",
      },
    },
    { additionalProperties: s.json() },
  );
