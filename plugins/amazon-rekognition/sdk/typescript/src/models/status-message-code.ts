import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status message code for the dataset operation. If a service error occurs, try the API call
 * again later. If a client error occurs, check the input parameters to the dataset API call that
 * failed.
 */
export const StatusMessageCode = {
  Success: "SUCCESS",
  ServiceError: "SERVICE_ERROR",
  ClientError: "CLIENT_ERROR",
} as const;
export type StatusMessageCode = (typeof StatusMessageCode)[keyof typeof StatusMessageCode] | (string & {});

export const statusMessageCodeSchema: EnumSchema<StatusMessageCode> =
  s.enumOf<StatusMessageCode>(StatusMessageCode);
