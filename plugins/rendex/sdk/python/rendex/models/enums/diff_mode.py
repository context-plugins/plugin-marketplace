from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DiffMode(str, Enum):
    VISUAL = "visual"
    TEXT = "text"
    BOTH = "both"

    __str__ = str.__str__


DiffModeOrStr: TypeAlias = Annotated[DiffMode | str, open_enum_validator(DiffMode)]
