from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FillbotStatus(str, Enum):
    """Current event enrichment status. Accepts PENDING, IN_PROGRESS, COMPLETE, or EXHAUSTED."""

    PENDING = "PENDING"
    IN_PROGRESS = "IN_PROGRESS"
    COMPLETE = "COMPLETE"
    EXHAUSTED = "EXHAUSTED"

    __str__ = str.__str__


FillbotStatusOrStr: TypeAlias = Annotated[FillbotStatus | str, open_enum_validator(FillbotStatus)]
