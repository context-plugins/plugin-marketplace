import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dismissalDetailsSchema, type DismissalDetails } from "./dismissal-details.js";
import { displayStatusSchema, type DisplayStatus } from "./display-status.js";

/** Request body for updating an insight's display status. */
export type UpdateStatusRequest = {
  /** The display status of the insight. */
  status: DisplayStatus;
  /** Details for why an insight was dismissed. */
  dismissalDetails?: DismissalDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateStatusRequestSchema: Schema<UpdateStatusRequest> = s.object<UpdateStatusRequest>(
  {
    status: displayStatusSchema,
    dismissalDetails: s.optional(s.lazy(() => dismissalDetailsSchema)),
  },
  { additionalProperties: s.json() },
);
