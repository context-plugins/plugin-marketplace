import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the stream processor. */
export const StatusAmazonRekognitionStreamProcessorApi = {
  Stopped: "STOPPED",
  Starting: "STARTING",
  Running: "RUNNING",
  Failed: "FAILED",
  Stopping: "STOPPING",
  Updating: "UPDATING",
} as const;
export type StatusAmazonRekognitionStreamProcessorApi =
  | (typeof StatusAmazonRekognitionStreamProcessorApi)[keyof typeof StatusAmazonRekognitionStreamProcessorApi]
  | (string & {});

export const statusAmazonRekognitionStreamProcessorApiSchema: EnumSchema<StatusAmazonRekognitionStreamProcessorApi> =
  s.enumOf<StatusAmazonRekognitionStreamProcessorApi>(StatusAmazonRekognitionStreamProcessorApi);
