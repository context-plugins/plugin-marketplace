from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Board(str, Enum):
    FILTERED = "filtered"
    PARTITIONED = "partitioned"

    __str__ = str.__str__


BoardOrStr: TypeAlias = Annotated[Board | str, open_enum_validator(Board)]
