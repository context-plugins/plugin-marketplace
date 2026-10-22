import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformLimitIncreaseRequest2Schema,
  type PlatformLimitIncreaseRequest2,
} from "./platform-limit-increase-request2.js";

/** Current authorized request with a response trace identifier. */
export type PlatformRequestResponse1 = {
  /** Authorized request at its current stored state. */
  request: PlatformLimitIncreaseRequest2;
  /** Trace identifier, distinct from the resource ID. */
  requestId: string;
};

export const platformRequestResponse1Schema: Schema<PlatformRequestResponse1> =
  s.object<PlatformRequestResponse1>({
    request: platformLimitIncreaseRequest2Schema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
