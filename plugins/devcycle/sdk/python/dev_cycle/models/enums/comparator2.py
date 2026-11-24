from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Comparator2(str, Enum):
    """Comparator to use"""

    U003D = "="
    U0021U003D = "!="
    U003E = ">"
    U003EU003D = ">="
    U003C = "<"
    U003CU003D = "<="
    EXIST = "exist"
    EXIST2 = "!exist"

    __str__ = str.__str__


Comparator2OrStr: TypeAlias = Annotated[Comparator2 | str, open_enum_validator(Comparator2)]
