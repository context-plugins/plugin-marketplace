from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Mode(str, Enum):
    SEMANTIC = "semantic"

    __str__ = str.__str__


ModeOrStr: TypeAlias = Annotated[Mode | str, open_enum_validator(Mode)]
