from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusDeliverdDevTasksApi(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in_progress"
    BLOCKED = "blocked"
    AWAITING_APPROVAL = "awaiting_approval"
    COMPLETED = "completed"
    CANCELLED = "cancelled"

    __str__ = str.__str__


StatusDeliverdDevTasksApiOrStr: TypeAlias = Annotated[
    StatusDeliverdDevTasksApi | str, open_enum_validator(StatusDeliverdDevTasksApi)
]
