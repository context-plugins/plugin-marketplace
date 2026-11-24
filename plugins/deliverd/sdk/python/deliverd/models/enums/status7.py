from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status7(str, Enum):
    OPEN = "open"
    VERIFIED = "verified"
    COMPLETE = "complete"
    EXPIRED = "expired"

    __str__ = str.__str__


Status7OrStr: TypeAlias = Annotated[Status7 | str, open_enum_validator(Status7)]
