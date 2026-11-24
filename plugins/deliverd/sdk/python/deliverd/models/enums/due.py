from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Due(str, Enum):
    """Return only schedules waiting on a publish"""

    _1 = "1"

    __str__ = str.__str__


DueOrStr: TypeAlias = Annotated[Due | str, open_enum_validator(Due)]
