from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CodeConnectJobsApi(str, Enum):
    """In case of failed job, displays error code."""

    SUCCESS = "success"
    USER_ACTION_REQUIRED = "user-action-required"
    SYSTEM_UNAVAILABLE = "system-unavailable"
    MAINTENANCE = "maintenance"
    CONNECTOR_ERROR = "connector-error"
    INSTITUTION_NOT_FOUND = "institution-not-found"
    INSTITUTION_NOT_AVAILABLE = "institution-not-available"
    INSTITUTION_DISABLED = "institution-disabled"
    MISSING_REQUIRED_FIELD = "missing-required-field"
    MISSING_REQUIRED_FIELD_VALUE = "missing-required-field-value"
    INVALID_FIELD_VALUE = "invalid-field-value"
    INVALID_CSV_ROW = "invalid-csv-row"
    ROW_COUNT_EXCEEDED = "row-count-exceeded"
    ACCOUNT_DATA_DIFFERS = "account-data-differs"
    EMPTY_FILE = "empty-file"
    BANK_STATEMENT_INVALID = "bank-statement-invalid"
    BANK_STATEMENT_NEW_PRODUCT = "bank-statement-new-product"
    BANK_STATEMENT_PARSING_ERROR = "bank-statement-parsing-error"
    BANK_STATEMENT_NOT_SUPPORTED = "bank-statement-not-supported"
    TXN_AFTER_LAST_UPDATED_DATE = "txn-after-last-updated-date"
    INVALID_CONNECTION = "invalid-connection"
    UNKNOWN_ERROR = "unknown-error"
    JOB_TIMED_OUT = "job-timed-out"

    __str__ = str.__str__


CodeConnectJobsApiOrStr: TypeAlias = Annotated[CodeConnectJobsApi | str, open_enum_validator(CodeConnectJobsApi)]
