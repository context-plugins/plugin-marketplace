import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusCallnodeIoEmailApi = {
  Pending: "pending",
  Verifying: "verifying",
  Active: "active",
  Failed: "failed",
} as const;
export type StatusCallnodeIoEmailApi =
  | (typeof StatusCallnodeIoEmailApi)[keyof typeof StatusCallnodeIoEmailApi]
  | (string & {});

export const statusCallnodeIoEmailApiSchema: EnumSchema<StatusCallnodeIoEmailApi> =
  s.enumOf<StatusCallnodeIoEmailApi>(StatusCallnodeIoEmailApi);
