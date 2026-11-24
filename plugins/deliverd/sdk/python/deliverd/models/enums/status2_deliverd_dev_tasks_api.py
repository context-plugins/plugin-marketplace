from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2DeliverdDevTasksApi(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    BLOCKED = "blocked"
    AWAITING_APPROVAL = "awaiting_approval"
    COMPLETED = "completed"
    CANCELLED = "cancelled"
    ACTIVE = "active"

    __str__ = str.__str__


Status2DeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    Status2DeliverdDevTasksApi | str, open_enum_validator(Status2DeliverdDevTasksApi)
]
