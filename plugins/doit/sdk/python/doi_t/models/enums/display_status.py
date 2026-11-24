from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisplayStatus(str, Enum):
    """The display status of the insight."""

    ACTIONABLE = "actionable"
    ACKNOWLEDGED = "acknowledged"
    OPTIMIZED = "optimized"
    DISMISSED = "dismissed"
    IN_PROGRESS = "in progress"
    UPGRADE_NEEDED = "upgrade needed"
    PERMISSIONS_NEEDED = "permissions needed"

    __str__ = str.__str__


DisplayStatusOrStr: TypeAlias = Annotated[DisplayStatus | str, open_enum_validator(DisplayStatus)]
