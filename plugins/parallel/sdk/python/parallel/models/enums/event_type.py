from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventType(str, Enum):
    TASK_RUN_STATUS = "task_run.status"

    __str__ = str.__str__


EventTypeOrStr: TypeAlias = Annotated[EventType | str, open_enum_validator(EventType)]
