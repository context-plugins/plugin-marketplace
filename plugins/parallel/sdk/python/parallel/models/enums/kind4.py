from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind4(str, Enum):
    FINDALL = "findall"

    __str__ = str.__str__


Kind4OrStr: TypeAlias = Annotated[Kind4 | str, open_enum_validator(Kind4)]
