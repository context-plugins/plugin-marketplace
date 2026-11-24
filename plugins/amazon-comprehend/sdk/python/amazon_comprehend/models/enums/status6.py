from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status6(str, Enum):
    """The status of the flywheel."""

    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

    __str__ = str.__str__


Status6OrStr: TypeAlias = Annotated[Status6 | str, open_enum_validator(Status6)]
