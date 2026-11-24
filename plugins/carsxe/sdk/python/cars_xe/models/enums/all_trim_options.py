from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AllTrimOptions(str, Enum):
    _1 = "1"

    __str__ = str.__str__


AllTrimOptionsOrStr: TypeAlias = Annotated[AllTrimOptions | str, open_enum_validator(AllTrimOptions)]
