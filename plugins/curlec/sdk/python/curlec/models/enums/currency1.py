from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Currency1(str, Enum):
    """Always INR for transfers."""

    INR = "INR"

    __str__ = str.__str__


Currency1OrStr: TypeAlias = Annotated[Currency1 | str, open_enum_validator(Currency1)]
