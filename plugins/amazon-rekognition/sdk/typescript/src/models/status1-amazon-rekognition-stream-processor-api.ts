import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the Amazon Rekognition stream processor. */
export const Status1AmazonRekognitionStreamProcessorApi = {
  Stopped: "STOPPED",
  Starting: "STARTING",
  Running: "RUNNING",
  Failed: "FAILED",
  Stopping: "STOPPING",
  Updating: "UPDATING",
} as const;
export type Status1AmazonRekognitionStreamProcessorApi =
  | (typeof Status1AmazonRekognitionStreamProcessorApi)[keyof typeof Status1AmazonRekognitionStreamProcessorApi]
  | (string & {});

export const status1AmazonRekognitionStreamProcessorApiSchema: EnumSchema<Status1AmazonRekognitionStreamProcessorApi> =
  s.enumOf<Status1AmazonRekognitionStreamProcessorApi>(Status1AmazonRekognitionStreamProcessorApi);
