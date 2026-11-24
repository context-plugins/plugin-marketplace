from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiType2(str, Enum):
    GRAPHQL = "GRAPHQL"
    MERGED = "MERGED"

    __str__ = str.__str__


ApiType2OrStr: TypeAlias = Annotated[ApiType2 | str, open_enum_validator(ApiType2)]
