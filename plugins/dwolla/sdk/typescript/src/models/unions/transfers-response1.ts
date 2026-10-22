import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  invalidAttemptToFacilitateFundsErrorSchema,
  type InvalidAttemptToFacilitateFundsError,
} from "../invalid-attempt-to-facilitate-funds-error.js";
import {
  invalidAttemptToPayInFundsErrorSchema,
  type InvalidAttemptToPayInFundsError,
} from "../invalid-attempt-to-pay-in-funds-error.js";
import {
  invalidAttemptToPayOutFundsErrorSchema,
  type InvalidAttemptToPayOutFundsError,
} from "../invalid-attempt-to-pay-out-funds-error.js";
import {
  rtpAccountSettingNotEnabledErrorSchema,
  type RtpAccountSettingNotEnabledError,
} from "../rtp-account-setting-not-enabled-error.js";

export type TransfersResponse1 =
  | InvalidAttemptToFacilitateFundsError
  | InvalidAttemptToPayInFundsError
  | InvalidAttemptToPayOutFundsError
  | RtpAccountSettingNotEnabledError;

export const transfersResponse1Schema: Schema<TransfersResponse1> = s.of<TransfersResponse1>(
  s.union([
    s.lazy(() => invalidAttemptToFacilitateFundsErrorSchema),
    s.lazy(() => invalidAttemptToPayInFundsErrorSchema),
    s.lazy(() => invalidAttemptToPayOutFundsErrorSchema),
    s.lazy(() => rtpAccountSettingNotEnabledErrorSchema),
  ]),
);
