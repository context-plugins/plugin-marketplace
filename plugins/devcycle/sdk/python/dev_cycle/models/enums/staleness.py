from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Staleness(str, Enum):
    ALL = "all"
    UNUSED = "unused"
    RELEASED = "released"
    UNMODIFIED = "unmodified"
    NOT_STALE = "notStale"

    __str__ = str.__str__


StalenessOrStr: TypeAlias = Annotated[Staleness | str, open_enum_validator(Staleness)]
