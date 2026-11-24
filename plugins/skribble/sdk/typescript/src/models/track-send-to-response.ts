import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusSkribbleSendToApiSchema,
  type StatusSkribbleSendToApi,
} from "./status-skribble-send-to-api.js";

export type TrackSendToResponse = {
  /** Status of the Send-To request */
  status: StatusSkribbleSendToApi;
  /** User who claimed the Send-To request */
  creator: string | null;
  /** List of signers for the Send-To request */
  signers: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trackSendToResponseSchema: Schema<TrackSendToResponse> = s.object<TrackSendToResponse>(
  {
    status: statusSkribbleSendToApiSchema,
    creator: s.nullable(s.string()),
    signers: s.nullable(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
