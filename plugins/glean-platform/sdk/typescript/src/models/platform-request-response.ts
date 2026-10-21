import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformLimitIncreaseRequest2Schema,
  type PlatformLimitIncreaseRequest2,
} from "./platform-limit-increase-request2.js";

/** Single authorized request with the enclosing response's trace identifier. */
export type PlatformRequestResponse = {
  /** Authorized request at its current stored state. */
  request: PlatformLimitIncreaseRequest2;
  /** Trace identifier, distinct from the resource ID. */
  requestId: string;
};

export const platformRequestResponseSchema: Schema<PlatformRequestResponse> =
  s.object<PlatformRequestResponse>({
    request: platformLimitIncreaseRequest2Schema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
