from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusUiPathOrchestratorQueueItemsApi(str, Enum):
    """Current processing status of the queue item"""

    NEW = "New"
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    SUCCESSFUL = "Successful"
    ABANDONED = "Abandoned"
    RETRIED = "Retried"
    DELETED = "Deleted"

    __str__ = str.__str__


StatusUiPathOrchestratorQueueItemsApiOrStr: TypeAlias = Annotated[
    StatusUiPathOrchestratorQueueItemsApi | str, open_enum_validator(StatusUiPathOrchestratorQueueItemsApi)
]
