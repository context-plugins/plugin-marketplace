from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Gender(str, Enum):
    """F - female, M - male, O - other"""

    F = "F"
    M = "M"
    O_ = "O"

    __str__ = str.__str__


GenderOrStr: TypeAlias = Annotated[Gender | str, open_enum_validator(Gender)]
