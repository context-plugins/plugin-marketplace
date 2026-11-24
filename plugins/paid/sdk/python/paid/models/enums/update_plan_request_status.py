from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UpdatePlanRequestStatus(str, Enum):
    """Set to ``archived`` to archive this plan, or ``active`` to restore it."""

    ACTIVE = "active"
    ARCHIVED = "archived"

    __str__ = str.__str__


UpdatePlanRequestStatusOrStr: TypeAlias = Annotated[
    UpdatePlanRequestStatus | str, open_enum_validator(UpdatePlanRequestStatus)
]
