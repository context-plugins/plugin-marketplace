from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """Current lifecycle status of the contact point."""

    ACTIVE = "ACTIVE"
    STOPPED = "STOPPED"
    FAILING = "FAILING"
    ARCHIVED = "ARCHIVED"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
