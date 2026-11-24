from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Comparator(str, Enum):
    """Comparator to use"""

    U003D = "="
    U0021U003D = "!="
    EXIST = "exist"
    EXIST2 = "!exist"
    CONTAIN = "contain"
    CONTAIN2 = "!contain"
    START_WITH = "startWith"
    START_WITH2 = "!startWith"
    END_WITH = "endWith"
    END_WITH2 = "!endWith"

    __str__ = str.__str__


ComparatorOrStr: TypeAlias = Annotated[Comparator | str, open_enum_validator(Comparator)]
