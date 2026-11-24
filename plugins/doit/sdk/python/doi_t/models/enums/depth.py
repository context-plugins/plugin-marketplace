from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Depth(str, Enum):
    DIRECT = "direct"
    TRANSITIVE = "transitive"

    __str__ = str.__str__


DepthOrStr: TypeAlias = Annotated[Depth | str, open_enum_validator(Depth)]
