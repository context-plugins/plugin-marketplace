from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code4(str, Enum):
    """Application-specific error code, expressed as a string value."""

    PARAMETER_NOT_SUPPLIED = "parameter-not-supplied"
    PARAMETER_NOT_VALID = "parameter-not-valid"
    INVALID_CREDENTIALS = "invalid-credentials"
    SERVICE_UNAVAILABLE = "service-unavailable"
    JOB_TIMED_OUT = "job-timed-out"
    ACCOUNT_NOT_ACCESSIBLE_REQUIRES_USER_ACTION = "account-not-accessible-requires-user-action"
    RESOURCE_NOT_FOUND = "resource-not-found"
    TEMPORARY_UNAVAILABLE = "temporary-unavailable"
    MAINTENANCE_ERROR = "maintenance-error"
    ROW_COUNT_EXCEEDED = "row-count-exceeded"
    EMPTY_FILE = "empty-file"
    BANK_STATEMENT_INVALID = "bank-statement-invalid"
    BANK_STATEMENT_NEW_PRODUCT = "bank-statement-new-product"
    BANK_STATEMENT_PARSING_ERROR = "bank-statement-parsing-error"
    BANK_STATEMENT_NOT_SUPPORTED = "bank-statement-not-supported"
    STATEMENT_NOT_AVAILABLE = "statement-not-available"
    TEMPORARY_UNAVAILABLE_QUEUED = "temporary-unavailable-queued"
    JOB_INVALIDATED = "job-invalidated"
    AUTHORIZATION_FAILED = "authorization-failed"
    INVALID_CSV_ROW = "invalid-csv-row"
    INVALID_FIELD_VALUE = "invalid-field-value"
    MISSING_REQUIRED_FIELD = "missing-required-field"
    MISSING_REQUIRED_FIELD_VALUE = "missing-required-field-value"
    ACCOUNT_DATA_DIFFERS = "account-data-differs"

    __str__ = str.__str__


Code4OrStr: TypeAlias = Annotated[Code4 | str, open_enum_validator(Code4)]
