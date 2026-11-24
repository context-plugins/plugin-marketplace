from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status8(str, Enum):
    """Specifies the status of the endpoint being returned. Possible values are: Creating, Ready, Updating, Deleting,
    Failed."""

    CREATING = "CREATING"
    DELETING = "DELETING"
    FAILED = "FAILED"
    IN_SERVICE = "IN_SERVICE"
    UPDATING = "UPDATING"

    __str__ = str.__str__


Status8OrStr: TypeAlias = Annotated[Status8 | str, open_enum_validator(Status8)]
