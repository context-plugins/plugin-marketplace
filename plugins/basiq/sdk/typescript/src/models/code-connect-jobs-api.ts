import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** In case of failed job, displays error code. */
export const CodeConnectJobsApi = {
  Success: "success",
  UserActionRequired: "user-action-required",
  SystemUnavailable: "system-unavailable",
  Maintenance: "maintenance",
  ConnectorError: "connector-error",
  InstitutionNotFound: "institution-not-found",
  InstitutionNotAvailable: "institution-not-available",
  InstitutionDisabled: "institution-disabled",
  MissingRequiredField: "missing-required-field",
  MissingRequiredFieldValue: "missing-required-field-value",
  InvalidFieldValue: "invalid-field-value",
  InvalidCsvRow: "invalid-csv-row",
  RowCountExceeded: "row-count-exceeded",
  AccountDataDiffers: "account-data-differs",
  EmptyFile: "empty-file",
  BankStatementInvalid: "bank-statement-invalid",
  BankStatementNewProduct: "bank-statement-new-product",
  BankStatementParsingError: "bank-statement-parsing-error",
  BankStatementNotSupported: "bank-statement-not-supported",
  TxnAfterLastUpdatedDate: "txn-after-last-updated-date",
  InvalidConnection: "invalid-connection",
  UnknownError: "unknown-error",
  JobTimedOut: "job-timed-out",
} as const;
export type CodeConnectJobsApi = (typeof CodeConnectJobsApi)[keyof typeof CodeConnectJobsApi] | (string & {});

export const codeConnectJobsApiSchema: EnumSchema<CodeConnectJobsApi> =
  s.enumOf<CodeConnectJobsApi>(CodeConnectJobsApi);
