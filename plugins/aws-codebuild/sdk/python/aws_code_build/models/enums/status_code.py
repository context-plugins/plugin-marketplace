from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCode(str, Enum):
    """The status code of the compute fleet. Valid values include: CREATING: The compute fleet is being created.
    UPDATING: The compute fleet is being updated. ROTATING: The compute fleet is being rotated. PENDING_DELETION: The
    compute fleet is pending deletion. DELETING: The compute fleet is being deleted. CREATE_FAILED: The compute fleet
    has failed to create. UPDATE_ROLLBACK_FAILED: The compute fleet has failed to update and could not rollback to
    previous state. ACTIVE: The compute fleet has succeeded and is active."""

    CREATING = "CREATING"
    UPDATING = "UPDATING"
    ROTATING = "ROTATING"
    PENDING_DELETION = "PENDING_DELETION"
    DELETING = "DELETING"
    CREATE_FAILED = "CREATE_FAILED"
    UPDATE_ROLLBACK_FAILED = "UPDATE_ROLLBACK_FAILED"
    ACTIVE = "ACTIVE"

    __str__ = str.__str__


StatusCodeOrStr: TypeAlias = Annotated[StatusCode | str, open_enum_validator(StatusCode)]
