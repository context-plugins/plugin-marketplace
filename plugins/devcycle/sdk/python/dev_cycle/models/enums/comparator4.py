from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Comparator4(str, Enum):
    """Comparator to use"""

    U003D = "="
    U0021U003D = "!="
    U003E = ">"
    U003EU003D = ">="
    U003C = "<"
    U003CU003D = "<="
    EXIST = "exist"
    EXIST2 = "!exist"
    CONTAIN = "contain"
    CONTAIN2 = "!contain"
    START_WITH = "startWith"
    START_WITH2 = "!startWith"
    END_WITH = "endWith"
    END_WITH2 = "!endWith"

    __str__ = str.__str__


Comparator4OrStr: TypeAlias = Annotated[Comparator4 | str, open_enum_validator(Comparator4)]
