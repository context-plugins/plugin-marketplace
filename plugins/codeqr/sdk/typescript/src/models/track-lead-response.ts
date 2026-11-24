import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clickCodeqrIoTrackApiSchema, type ClickCodeqrIoTrackApi } from "./click-codeqr-io-track-api.js";
import {
  customerCodeqrIoTrackApiSchema,
  type CustomerCodeqrIoTrackApi,
} from "./customer-codeqr-io-track-api.js";

export type TrackLeadResponse = {
  click: ClickCodeqrIoTrackApi;
  customer: CustomerCodeqrIoTrackApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trackLeadResponseSchema: Schema<TrackLeadResponse> = s.object<TrackLeadResponse>(
  {
    click: clickCodeqrIoTrackApiSchema,
    customer: customerCodeqrIoTrackApiSchema,
  },
  { additionalProperties: s.json() },
);
