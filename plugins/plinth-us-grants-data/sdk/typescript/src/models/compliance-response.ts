import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reportDateSchema, type ReportDate } from "./unions/report-date.js";
import { reportIdSchema, type ReportId } from "./unions/report-id.js";
import { sources1Schema, type Sources1 } from "./unions/sources1.js";
import { xPlinth1Schema, type XPlinth1 } from "./unions/xplinth1.js";

/**
 * A Charity Check-shaped screen. On an unpaid key the verdicts are present and the evidence fields
 * are blanked — `x_plinth.withheld` names every one, so a client can tell a blank from a no.
 */
export type ComplianceResponse = {
  /** @default 200 */
  code?: number;
  message: string;
  xPlinth?: XPlinth1;
  ein: string;
  /** The screen itself: BMF status, Pub 78, revocation, sanctions, NTEE, financials. */
  compliance: Record<string, unknown>;
  reportDate?: ReportDate;
  /**
   * Identifies this screen by its contents — a digest of the record, its sources and `report_date`.
   * Re-deriving it from a retained response reproduces the same value; an altered one does not. Not
   * a signature: anyone can recompute it, so it evidences drift rather than authenticity.
   */
  reportId?: ReportId;
  /** When each IRS/Treasury source behind this screen was last pulled. */
  sources?: Sources1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const complianceResponseSchema: Schema<ComplianceResponse> = s.object<ComplianceResponse>(
  {
    code: s.defaulted(s.int(), 200),
    message: s.string(),
    xPlinth: s.optional(s.lazy(() => xPlinth1Schema)),
    ein: s.string(),
    compliance: s.record(s.string(), s.unknown()),
    reportDate: s.optional(s.lazy(() => reportDateSchema)),
    reportId: s.optional(s.lazy(() => reportIdSchema)),
    sources: s.optional(s.lazy(() => sources1Schema)),
    _keysMap: {
      xPlinth: "x_plinth",
      reportDate: "report_date",
      reportId: "report_id",
    },
  },
  { additionalProperties: s.json() },
);
