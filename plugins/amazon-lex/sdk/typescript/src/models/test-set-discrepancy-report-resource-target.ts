import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testSetDiscrepancyReportBotAliasTargetSchema,
  type TestSetDiscrepancyReportBotAliasTarget,
} from "./test-set-discrepancy-report-bot-alias-target.js";

export type TestSetDiscrepancyReportResourceTarget = {
  botAliasTarget?: TestSetDiscrepancyReportBotAliasTarget;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetDiscrepancyReportResourceTargetSchema: Schema<TestSetDiscrepancyReportResourceTarget> =
  s.object<TestSetDiscrepancyReportResourceTarget>(
    {
      botAliasTarget: s.optional(s.lazy(() => testSetDiscrepancyReportBotAliasTargetSchema)),
    },
    { additionalProperties: s.json() },
  );
