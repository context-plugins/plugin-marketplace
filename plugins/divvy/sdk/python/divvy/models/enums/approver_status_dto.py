from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApproverStatusDto(str, Enum):
    """Approver status DTO."""

    WAITING = "WAITING"
    VIEWED = "VIEWED"
    REROUTED = "REROUTED"
    DENIED = "DENIED"
    APPROVED = "APPROVED"
    UPCOMING = "UPCOMING"
    STALE = "STALE"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


ApproverStatusDtoOrStr: TypeAlias = Annotated[ApproverStatusDto | str, open_enum_validator(ApproverStatusDto)]
