from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ModeModel(str, Enum):
    TEXT = "text"
    SEMANTIC = "semantic"
    HYBRID = "hybrid"

    __str__ = str.__str__


ModeModelOrStr: TypeAlias = Annotated[ModeModel | str, open_enum_validator(ModeModel)]
