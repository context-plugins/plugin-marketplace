from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QaResultStatus(str, Enum):
    QUEUED = "queued"
    RUNNING = "running"
    CANCELLING = "cancelling"
    COMPLETED = "completed"
    ERROR = "error"
    CANCELLED = "cancelled"

    __str__ = str.__str__


QaResultStatusOrStr: TypeAlias = Annotated[QaResultStatus | str, open_enum_validator(QaResultStatus)]
