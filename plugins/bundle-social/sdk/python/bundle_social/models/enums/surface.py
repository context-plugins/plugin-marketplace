from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Surface(str, Enum):
    PROFILE_GRID = "PROFILE_GRID"
    NON_GRID = "NON_GRID"
    STORY = "STORY"
    ALL = "ALL"

    __str__ = str.__str__


SurfaceOrStr: TypeAlias = Annotated[Surface | str, open_enum_validator(Surface)]
