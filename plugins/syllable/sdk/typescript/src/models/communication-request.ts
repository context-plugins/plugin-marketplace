import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CommunicationRequest = {
  /** ID for target outreach (unique within batch) */
  referenceId: string;
  /** Target phone number */
  target: string;
  /** Variables for request */
  requestVariables: Record<string, string>;
};

export const communicationRequestSchema: Schema<CommunicationRequest> = s.object<CommunicationRequest>({
  referenceId: s.string(),
  target: s.string(),
  requestVariables: s.record(s.string(), s.string()),
  _keysMap: {
    referenceId: "reference_id",
    requestVariables: "request_variables",
  },
});
