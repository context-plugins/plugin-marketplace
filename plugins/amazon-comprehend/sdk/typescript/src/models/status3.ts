import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the status of the endpoint. Because the endpoint updates and creation are asynchronous,
 * so customers will need to wait for the endpoint to be Ready status before making inference
 * requests.
 */
export const Status3 = {
  Creating: "CREATING",
  Deleting: "DELETING",
  Failed: "FAILED",
  InService: "IN_SERVICE",
  Updating: "UPDATING",
} as const;
export type Status3 = (typeof Status3)[keyof typeof Status3] | (string & {});

export const status3Schema: EnumSchema<Status3> = s.enumOf<Status3>(Status3);
