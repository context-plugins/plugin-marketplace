from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusPerigonMonitorsApi(str, Enum):
    """Current lifecycle status: DRAFT, ACTIVE, STOPPED, or ARCHIVED."""

    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    STOPPED = "STOPPED"
    ARCHIVED = "ARCHIVED"

    __str__ = str.__str__


StatusPerigonMonitorsApiOrStr: TypeAlias = Annotated[
    StatusPerigonMonitorsApi | str, open_enum_validator(StatusPerigonMonitorsApi)
]
