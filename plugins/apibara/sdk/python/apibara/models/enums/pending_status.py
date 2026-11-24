from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PendingStatus(str, Enum):
    PENDING = "pending"
    AVAILABLE = "available"
    UNKNOWN = "unknown"

    __str__ = str.__str__


PendingStatusOrStr: TypeAlias = Annotated[PendingStatus | str, open_enum_validator(PendingStatus)]
