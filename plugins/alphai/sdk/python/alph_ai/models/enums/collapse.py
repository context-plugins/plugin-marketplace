from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Collapse(str, Enum):
    STORY = "story"

    __str__ = str.__str__


CollapseOrStr: TypeAlias = Annotated[Collapse | str, open_enum_validator(Collapse)]
