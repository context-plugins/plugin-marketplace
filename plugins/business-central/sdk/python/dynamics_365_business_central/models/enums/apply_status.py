from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApplyStatus(str, Enum):
    IN_PROGRESS = "InProgress"
    COMPLETED = "Completed"
    ERROR = "Error"

    __str__ = str.__str__


ApplyStatusOrStr: TypeAlias = Annotated[ApplyStatus | str, open_enum_validator(ApplyStatus)]
