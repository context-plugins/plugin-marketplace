from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status61(str, Enum):
    DRAFT = "DRAFT"
    DISABLED = "DISABLED"

    __str__ = str.__str__


Status61OrStr: TypeAlias = Annotated[Status61 | str, open_enum_validator(Status61)]
