from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Upcoming(str, Enum):
    ALL = "all"
    ONLY = "only"
    WITHOUT = "without"

    __str__ = str.__str__


UpcomingOrStr: TypeAlias = Annotated[Upcoming | str, open_enum_validator(Upcoming)]
