from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Compensation type. Default is CompensationType.COMPENSATION_TYPE_UNSPECIFIED."""

    COMPENSATION_TYPE_UNSPECIFIED = "COMPENSATION_TYPE_UNSPECIFIED"
    BASE = "BASE"
    BONUS = "BONUS"
    SIGNING_BONUS = "SIGNING_BONUS"
    EQUITY = "EQUITY"
    PROFIT_SHARING = "PROFIT_SHARING"
    COMMISSIONS = "COMMISSIONS"
    TIPS = "TIPS"
    OTHER_COMPENSATION_TYPE = "OTHER_COMPENSATION_TYPE"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
