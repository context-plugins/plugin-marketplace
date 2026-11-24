from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Currency(str, Enum):
    """Standard 3 character currency codes as per ISO-4217."""

    AUD = "AUD"
    USD = "USD"
    GBP = "GBP"

    __str__ = str.__str__


CurrencyOrStr: TypeAlias = Annotated[Currency | str, open_enum_validator(Currency)]
