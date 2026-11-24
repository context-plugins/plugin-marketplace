from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Comparator5(str, Enum):
    U003D = "="
    U0021U003D = "!="

    __str__ = str.__str__


Comparator5OrStr: TypeAlias = Annotated[Comparator5 | str, open_enum_validator(Comparator5)]
