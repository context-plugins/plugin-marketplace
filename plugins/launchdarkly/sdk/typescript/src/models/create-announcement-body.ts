import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { severitySchema, type Severity } from "./severity.js";

/** Create announcement request body */
export type CreateAnnouncementBody = {
  /** true if the announcement is dismissible */
  isDismissible: boolean;
  /** The title of the announcement */
  title: string;
  /** The message of the announcement */
  message: string;
  /** The start time of the announcement. This is a Unix timestamp in milliseconds. */
  startTime: number;
  /** The end time of the announcement. This is a Unix timestamp in milliseconds. */
  endTime?: number;
  /** The severity of the announcement */
  severity: Severity;
};

export const createAnnouncementBodySchema: Schema<CreateAnnouncementBody> = s.object<CreateAnnouncementBody>({
  isDismissible: s.boolean(),
  title: s.string(),
  message: s.string(),
  startTime: s.int(),
  endTime: s.optional(s.int()),
  severity: severitySchema,
});
