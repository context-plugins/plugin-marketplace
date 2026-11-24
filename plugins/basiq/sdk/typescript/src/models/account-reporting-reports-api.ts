import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  classReportingReportsApiSchema,
  type ClassReportingReportsApi,
} from "./class-reporting-reports-api.js";
import {
  links3ReportingReportsApiSchema,
  type Links3ReportingReportsApi,
} from "./links3-reporting-reports-api.js";
import {
  transactionIntervalReportingReportsApiSchema,
  type TransactionIntervalReportingReportsApi,
} from "./transaction-interval-reporting-reports-api.js";

export type AccountReportingReportsApi = {
  /** Identifier for the account */
  id?: string;
  /** Account number */
  accountNo?: string;
  /** Name of the account */
  name?: string;
  /** Currency of the account */
  currency?: string;
  /** Current balance of the account */
  balance?: string;
  /** Available funds in the account */
  availableFunds?: string;
  /** Date and time when the account was last updated */
  lastUpdated?: Date;
  /** Institution of the account */
  institution?: string;
  class?: ClassReportingReportsApi;
  transactionIntervals?: TransactionIntervalReportingReportsApi[];
  /** Holder of the account */
  accountHolder?: string;
  /** Ownership status of the account */
  accountOwnership?: string;
  /** connectionID of that account */
  connection?: string;
  /** Status of the account */
  status?: string;
  /** Credit limit of the account */
  creditLimit?: string;
  links?: Links3ReportingReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountReportingReportsApiSchema: Schema<AccountReportingReportsApi> =
  s.object<AccountReportingReportsApi>(
    {
      id: s.optional(s.string()),
      accountNo: s.optional(s.string()),
      name: s.optional(s.string()),
      currency: s.optional(s.string()),
      balance: s.optional(s.string()),
      availableFunds: s.optional(s.string()),
      lastUpdated: s.optional(s.dateTime()),
      institution: s.optional(s.string()),
      class: s.optional(s.lazy(() => classReportingReportsApiSchema)),
      transactionIntervals: s.optional(s.array(s.lazy(() => transactionIntervalReportingReportsApiSchema))),
      accountHolder: s.optional(s.string()),
      accountOwnership: s.optional(s.string()),
      connection: s.optional(s.string()),
      status: s.optional(s.string()),
      creditLimit: s.optional(s.string()),
      links: s.optional(s.lazy(() => links3ReportingReportsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
