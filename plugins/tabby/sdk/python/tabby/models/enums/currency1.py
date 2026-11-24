from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Currency1(str, Enum):
    """The currency of the dispute. It's always equal to the currency of the payment."""

    AED = "AED"
    SAR = "SAR"
    KWD = "KWD"

    __str__ = str.__str__


Currency1OrStr: TypeAlias = Annotated[Currency1 | str, open_enum_validator(Currency1)]
