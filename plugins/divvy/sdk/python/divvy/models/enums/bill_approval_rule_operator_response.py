from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillApprovalRuleOperatorResponse(str, Enum):
    """Response enum of operators supported for bill policy approval rules."""

    LT = "lt"
    GTE = "gte"
    IN = "in"
    NIN = "nin"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


BillApprovalRuleOperatorResponseOrStr: TypeAlias = Annotated[
    BillApprovalRuleOperatorResponse | str, open_enum_validator(BillApprovalRuleOperatorResponse)
]
