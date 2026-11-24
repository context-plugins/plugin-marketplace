from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StageType(str, Enum):
    """Semantic stage type - use this for won/lost, cross-pipeline, instead of string-matching the key."""

    OPEN = "open"
    WON = "won"
    LOST = "lost"

    __str__ = str.__str__


StageTypeOrStr: TypeAlias = Annotated[StageType | str, open_enum_validator(StageType)]
