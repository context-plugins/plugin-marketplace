from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status5(str, Enum):
    ACTIVE = "active"
    COMPLETE = "complete"
    ARCHIVED = "archived"

    __str__ = str.__str__


Status5OrStr: TypeAlias = Annotated[Status5 | str, open_enum_validator(Status5)]
