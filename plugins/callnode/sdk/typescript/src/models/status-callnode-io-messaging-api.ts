import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusCallnodeIoMessagingApi = {
  Queued: "queued",
  Sent: "sent",
  Delivered: "delivered",
  Failed: "failed",
} as const;
export type StatusCallnodeIoMessagingApi =
  | (typeof StatusCallnodeIoMessagingApi)[keyof typeof StatusCallnodeIoMessagingApi]
  | (string & {});

export const statusCallnodeIoMessagingApiSchema: EnumSchema<StatusCallnodeIoMessagingApi> =
  s.enumOf<StatusCallnodeIoMessagingApi>(StatusCallnodeIoMessagingApi);
