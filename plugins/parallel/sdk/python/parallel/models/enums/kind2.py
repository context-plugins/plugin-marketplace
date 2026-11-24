from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Kind2(str, Enum):
    MONITOR = "monitor"

    __str__ = str.__str__


Kind2OrStr: TypeAlias = Annotated[Kind2 | str, open_enum_validator(Kind2)]
