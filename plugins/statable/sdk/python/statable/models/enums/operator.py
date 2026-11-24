from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator(str, Enum):
    """e = equals, b = begins with, c = contains."""

    E = "e"
    B = "b"
    C = "c"

    __str__ = str.__str__


OperatorOrStr: TypeAlias = Annotated[Operator | str, open_enum_validator(Operator)]
