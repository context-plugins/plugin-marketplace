import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicApiTestConnectionStateDto = {
  Queued: "queued",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
  Cancelled: "cancelled",
} as const;
export type PublicApiTestConnectionStateDto =
  | (typeof PublicApiTestConnectionStateDto)[keyof typeof PublicApiTestConnectionStateDto]
  | (string & {});

export const publicApiTestConnectionStateDtoSchema: EnumSchema<PublicApiTestConnectionStateDto> =
  s.enumOf<PublicApiTestConnectionStateDto>(PublicApiTestConnectionStateDto);
