from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Context(str, Enum):
    """Additional information about a compute fleet. Valid values include: CREATE_FAILED: The compute fleet has failed
    to create. UPDATE_FAILED: The compute fleet has failed to update."""

    CREATE_FAILED = "CREATE_FAILED"
    UPDATE_FAILED = "UPDATE_FAILED"
    ACTION_REQUIRED = "ACTION_REQUIRED"
    PENDING_DELETION = "PENDING_DELETION"
    INSUFFICIENT_CAPACITY = "INSUFFICIENT_CAPACITY"

    __str__ = str.__str__


ContextOrStr: TypeAlias = Annotated[Context | str, open_enum_validator(Context)]
