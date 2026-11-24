from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FillRates(str, Enum):
    _0 = "0"
    _1 = "1"

    __str__ = str.__str__


FillRatesOrStr: TypeAlias = Annotated[FillRates | str, open_enum_validator(FillRates)]
