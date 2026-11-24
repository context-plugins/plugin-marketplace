import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status for the dataset. */
export const StatusAmazonRekognitionProjectApi = {
  CreateInProgress: "CREATE_IN_PROGRESS",
  CreateComplete: "CREATE_COMPLETE",
  CreateFailed: "CREATE_FAILED",
  UpdateInProgress: "UPDATE_IN_PROGRESS",
  UpdateComplete: "UPDATE_COMPLETE",
  UpdateFailed: "UPDATE_FAILED",
  DeleteInProgress: "DELETE_IN_PROGRESS",
} as const;
export type StatusAmazonRekognitionProjectApi =
  | (typeof StatusAmazonRekognitionProjectApi)[keyof typeof StatusAmazonRekognitionProjectApi]
  | (string & {});

export const statusAmazonRekognitionProjectApiSchema: EnumSchema<StatusAmazonRekognitionProjectApi> =
  s.enumOf<StatusAmazonRekognitionProjectApi>(StatusAmazonRekognitionProjectApi);
