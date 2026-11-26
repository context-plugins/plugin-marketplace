from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Reason1(str, Enum):
    SEARCH_UNAVAILABLE = "search_unavailable"

    __str__ = str.__str__


Reason1OrStr: TypeAlias = Annotated[Reason1 | str, open_enum_validator(Reason1)]
