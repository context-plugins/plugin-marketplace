import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApplicationContextIngestionStatus = {
  ApplicationContextIngestionStatusUnspecified: "APPLICATION_CONTEXT_INGESTION_STATUS_UNSPECIFIED",
  ApplicationContextIngestionStatusCompleted: "APPLICATION_CONTEXT_INGESTION_STATUS_COMPLETED",
} as const;
export type ApplicationContextIngestionStatus =
  | (typeof ApplicationContextIngestionStatus)[keyof typeof ApplicationContextIngestionStatus]
  | (string & {});

export const applicationContextIngestionStatusSchema: EnumSchema<ApplicationContextIngestionStatus> =
  s.enumOf<ApplicationContextIngestionStatus>(ApplicationContextIngestionStatus);
