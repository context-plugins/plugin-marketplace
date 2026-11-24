from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status10(str, Enum):
    """Filter the flywheels based on the flywheel status."""

    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    FAILED = "FAILED"

    __str__ = str.__str__


Status10OrStr: TypeAlias = Annotated[Status10 | str, open_enum_validator(Status10)]
