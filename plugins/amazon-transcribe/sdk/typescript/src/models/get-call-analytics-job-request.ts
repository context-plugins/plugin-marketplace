import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetCallAnalyticsJobRequest = {
  /**
   * The name of the Call Analytics job you want information about. Job names are case sensitive.
   */
  callAnalyticsJobName: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getCallAnalyticsJobRequestSchema: Schema<GetCallAnalyticsJobRequest> =
  s.object<GetCallAnalyticsJobRequest>(
    {
      callAnalyticsJobName: s.string(),
      _keysMap: {
        callAnalyticsJobName: "CallAnalyticsJobName",
      },
    },
    { additionalProperties: s.json() },
  );
