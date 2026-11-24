from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class QaAgentResultStatus(str, Enum):
    QUEUED = "queued"
    COMPLETED = "completed"
    ERROR = "error"
    CANCELLED = "cancelled"

    __str__ = str.__str__


QaAgentResultStatusOrStr: TypeAlias = Annotated[QaAgentResultStatus | str, open_enum_validator(QaAgentResultStatus)]
