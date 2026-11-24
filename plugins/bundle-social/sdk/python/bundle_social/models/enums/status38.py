from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status38(str, Enum):
    OPEN = "OPEN"
    ARCHIVED = "ARCHIVED"

    __str__ = str.__str__


Status38OrStr: TypeAlias = Annotated[Status38 | str, open_enum_validator(Status38)]
