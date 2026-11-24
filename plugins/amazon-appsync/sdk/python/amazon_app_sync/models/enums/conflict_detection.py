from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConflictDetection(str, Enum):
    """The Conflict Detection strategy to use. VERSION: Detect conflicts based on object versions for this resolver.
    NONE: Do not detect conflicts when invoking this resolver."""

    VERSION = "VERSION"
    NONE = "NONE"

    __str__ = str.__str__


ConflictDetectionOrStr: TypeAlias = Annotated[ConflictDetection | str, open_enum_validator(ConflictDetection)]
