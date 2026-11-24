from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """Whether this recipient was accepted for delivery or rejected at validation time."""

    ACCEPTED = "accepted"
    REJECTED = "rejected"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
