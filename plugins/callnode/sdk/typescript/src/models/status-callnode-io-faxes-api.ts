import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusCallnodeIoFaxesApi = {
  Queued: "queued",
  Dialing: "dialing",
  Transmitting: "transmitting",
  Receiving: "receiving",
  Completed: "completed",
  Failed: "failed",
} as const;
export type StatusCallnodeIoFaxesApi =
  | (typeof StatusCallnodeIoFaxesApi)[keyof typeof StatusCallnodeIoFaxesApi]
  | (string & {});

export const statusCallnodeIoFaxesApiSchema: EnumSchema<StatusCallnodeIoFaxesApi> =
  s.enumOf<StatusCallnodeIoFaxesApi>(StatusCallnodeIoFaxesApi);
