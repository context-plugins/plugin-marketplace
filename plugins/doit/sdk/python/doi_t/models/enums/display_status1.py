from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisplayStatus1(str, Enum):
    ACTIONABLE = "actionable"
    ACKNOWLEDGED = "acknowledged"
    IN_PROGRESS = "in progress"
    OPTIMIZED = "optimized"
    DISMISSED = "dismissed"

    __str__ = str.__str__


DisplayStatus1OrStr: TypeAlias = Annotated[DisplayStatus1 | str, open_enum_validator(DisplayStatus1)]
