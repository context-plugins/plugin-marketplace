from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncludePosts1(str, Enum):
    FALSE = "false"

    __str__ = str.__str__


IncludePosts1OrStr: TypeAlias = Annotated[IncludePosts1 | str, open_enum_validator(IncludePosts1)]
