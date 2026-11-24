from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State11(str, Enum):
    """Output only. The current state of the metastore service."""

    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    SUSPENDING = "SUSPENDING"
    SUSPENDED = "SUSPENDED"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    ERROR = "ERROR"
    AUTOSCALING = "AUTOSCALING"
    MIGRATING = "MIGRATING"
    PROXY = "PROXY"

    __str__ = str.__str__


State11OrStr: TypeAlias = Annotated[State11 | str, open_enum_validator(State11)]
