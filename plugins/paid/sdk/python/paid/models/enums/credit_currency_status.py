from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreditCurrencyStatus(str, Enum):
    """Whether this credit currency is active or archived."""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


CreditCurrencyStatusOrStr: TypeAlias = Annotated[CreditCurrencyStatus | str, open_enum_validator(CreditCurrencyStatus)]
