import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the delete project operation. */
export const Status1AmazonRekognitionProjectApi = {
  Creating: "CREATING",
  Created: "CREATED",
  Deleting: "DELETING",
} as const;
export type Status1AmazonRekognitionProjectApi =
  | (typeof Status1AmazonRekognitionProjectApi)[keyof typeof Status1AmazonRekognitionProjectApi]
  | (string & {});

export const status1AmazonRekognitionProjectApiSchema: EnumSchema<Status1AmazonRekognitionProjectApi> =
  s.enumOf<Status1AmazonRekognitionProjectApi>(Status1AmazonRekognitionProjectApi);
