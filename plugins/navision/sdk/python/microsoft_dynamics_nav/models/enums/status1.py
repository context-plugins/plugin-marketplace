from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1(str, Enum):
    """Current status of the environment"""

    NOT_READY = "NotReady"
    REMOVING = "Removing"
    PREPARING = "Preparing"
    ACTIVE = "Active"
    UPGRADING = "Upgrading"
    CREATING_FAILED = "CreatingFailed"
    REMOVING_FAILED = "RemovingFailed"
    SOFT_DELETING = "SoftDeleting"
    SOFT_DELETING_FAILED = "SoftDeletingFailed"
    SOFT_DELETED = "SoftDeleted"
    RECOVERING = "Recovering"
    RECOVERING_FAILED = "RecoveringFailed"

    __str__ = str.__str__


Status1OrStr: TypeAlias = Annotated[Status1 | str, open_enum_validator(Status1)]
