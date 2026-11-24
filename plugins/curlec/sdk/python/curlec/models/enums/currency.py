from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Currency(str, Enum):
    INR = "INR"

    __str__ = str.__str__


CurrencyOrStr: TypeAlias = Annotated[Currency | str, open_enum_validator(Currency)]
