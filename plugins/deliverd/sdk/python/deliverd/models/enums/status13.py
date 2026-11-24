from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status13(str, Enum):
    OPEN = "open"
    RESOLVED = "resolved"

    __str__ = str.__str__


Status13OrStr: TypeAlias = Annotated[Status13 | str, open_enum_validator(Status13)]
