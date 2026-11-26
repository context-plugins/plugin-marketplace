from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verdict1(str, Enum):
    ABOVE = "above"
    IN_LINE = "in line"
    BELOW = "below"
    N_A = "n/a"

    __str__ = str.__str__


Verdict1OrStr: TypeAlias = Annotated[Verdict1 | str, open_enum_validator(Verdict1)]
