from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RetrievalStatus(str, Enum):
    """Status of the retrieval."""

    SCHEDULED = "SCHEDULED"
    RUNNING = "RUNNING"
    COMPLETE = "COMPLETE"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"
    TIMEOUT = "TIMEOUT"

    __str__ = str.__str__


RetrievalStatusOrStr: TypeAlias = Annotated[RetrievalStatus | str, open_enum_validator(RetrievalStatus)]
