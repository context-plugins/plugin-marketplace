import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sentSchema, type Sent } from "./sent.js";

export type ApiV1ReportsSendResponse = {
  sent: Sent[];
  /** Recipients who could already open it; emailed again anyway */
  alreadyHadAccess: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsSendResponseSchema: Schema<ApiV1ReportsSendResponse> =
  s.object<ApiV1ReportsSendResponse>(
    {
      sent: s.array(s.lazy(() => sentSchema)),
      alreadyHadAccess: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
