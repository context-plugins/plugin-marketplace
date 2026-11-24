import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Application-specific error code, expressed as a string value. */
export const Code4 = {
  ParameterNotSupplied: "parameter-not-supplied",
  ParameterNotValid: "parameter-not-valid",
  InvalidCredentials: "invalid-credentials",
  ServiceUnavailable: "service-unavailable",
  JobTimedOut: "job-timed-out",
  AccountNotAccessibleRequiresUserAction: "account-not-accessible-requires-user-action",
  ResourceNotFound: "resource-not-found",
  TemporaryUnavailable: "temporary-unavailable",
  MaintenanceError: "maintenance-error",
  RowCountExceeded: "row-count-exceeded",
  EmptyFile: "empty-file",
  BankStatementInvalid: "bank-statement-invalid",
  BankStatementNewProduct: "bank-statement-new-product",
  BankStatementParsingError: "bank-statement-parsing-error",
  BankStatementNotSupported: "bank-statement-not-supported",
  StatementNotAvailable: "statement-not-available",
  TemporaryUnavailableQueued: "temporary-unavailable-queued",
  JobInvalidated: "job-invalidated",
  AuthorizationFailed: "authorization-failed",
  InvalidCsvRow: "invalid-csv-row",
  InvalidFieldValue: "invalid-field-value",
  MissingRequiredField: "missing-required-field",
  MissingRequiredFieldValue: "missing-required-field-value",
  AccountDataDiffers: "account-data-differs",
} as const;
export type Code4 = (typeof Code4)[keyof typeof Code4] | (string & {});

export const code4Schema: EnumSchema<Code4> = s.enumOf<Code4>(Code4);
