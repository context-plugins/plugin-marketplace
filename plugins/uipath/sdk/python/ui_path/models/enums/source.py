from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Source(str, Enum):
    """How the job was initiated"""

    MANUAL = "Manual"
    SCHEDULE = "Schedule"
    QUEUE = "Queue"

    __str__ = str.__str__


SourceOrStr: TypeAlias = Annotated[Source | str, open_enum_validator(Source)]
