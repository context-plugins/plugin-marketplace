from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChainStage(str, Enum):
    """search or detail for chained jobs, null otherwise."""

    SEARCH = "search"
    DETAIL = "detail"

    __str__ = str.__str__


ChainStageOrStr: TypeAlias = Annotated[ChainStage | str, open_enum_validator(ChainStage)]
