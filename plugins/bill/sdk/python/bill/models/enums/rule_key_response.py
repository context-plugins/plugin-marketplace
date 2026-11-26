from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RuleKeyResponse(str, Enum):
    """Response enum of allowed keys for bill policy approval."""

    BILL_AMOUNT = "BILL_AMOUNT"
    BILL_LINE_ITEM_AMOUNT = "BILL_LINE_ITEM_AMOUNT"
    ACCOUNTING_CLASS_ID = "ACCOUNTING_CLASS_ID"
    CHART_OF_ACCOUNT_ID = "CHART_OF_ACCOUNT_ID"
    CUSTOMER_ID = "CUSTOMER_ID"
    DEPARTMENT_ID = "DEPARTMENT_ID"
    EMPLOYEE_ID = "EMPLOYEE_ID"
    JOB_ID = "JOB_ID"
    LOCATION_ID = "LOCATION_ID"
    VENDOR_ID = "VENDOR_ID"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


RuleKeyResponseOrStr: TypeAlias = Annotated[RuleKeyResponse | str, open_enum_validator(RuleKeyResponse)]
