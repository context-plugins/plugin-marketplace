from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RuleKeyCreateDto(str, Enum):
    """Keys for approval rules."""

    BILL_AMOUNT = "BILL_AMOUNT"
    BILL_LINE_ITEM_AMOUNT = "BILL_LINE_ITEM_AMOUNT"
    CHART_OF_ACCOUNT_ID = "CHART_OF_ACCOUNT_ID"
    VENDOR_ID = "VENDOR_ID"

    __str__ = str.__str__


RuleKeyCreateDtoOrStr: TypeAlias = Annotated[RuleKeyCreateDto | str, open_enum_validator(RuleKeyCreateDto)]
