from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceId(str, Enum):
    PUBLIC_API = "public-api"

    __str__ = str.__str__


SourceIdOrStr: TypeAlias = Annotated[SourceId | str, open_enum_validator(SourceId)]
