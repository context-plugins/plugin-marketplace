from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """The cache instance status. AVAILABLE: The instance is available for use. CREATING: The instance is currently
    creating. DELETING: The instance is currently deleting. MODIFYING: The instance is currently modifying. FAILED: The
    instance has failed creation."""

    AVAILABLE = "AVAILABLE"
    CREATING = "CREATING"
    DELETING = "DELETING"
    MODIFYING = "MODIFYING"
    FAILED = "FAILED"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
