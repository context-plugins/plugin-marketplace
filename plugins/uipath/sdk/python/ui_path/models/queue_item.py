from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.priority1 import Priority1OrStr
from .enums.review_status import ReviewStatusOrStr
from .enums.status_ui_path_orchestrator_queue_items_api import StatusUiPathOrchestratorQueueItemsApiOrStr


class QueueItem(SdkBaseModel):
    """A single transaction item in a queue"""

    id: Optional[int] = Field(default=UNSET, alias="Id")
    """Unique integer identifier of the queue item"""

    key: Optional[UUID] = Field(default=UNSET, alias="Key")
    """Unique GUID key for the queue item"""

    queue_definition_id: Optional[int] = Field(default=UNSET, alias="QueueDefinitionId")
    """ID of the queue this item belongs to"""

    status: Optional[StatusUiPathOrchestratorQueueItemsApiOrStr] = Field(default=UNSET, alias="Status")
    """Current processing status of the queue item"""

    review_status: Optional[ReviewStatusOrStr] = Field(default=UNSET, alias="ReviewStatus")
    """Manual review status for failed items"""

    priority: Optional[Priority1OrStr] = Field(default=UNSET, alias="Priority")
    """Processing priority of the queue item"""

    reference: Optional[str] = Field(default=UNSET, alias="Reference")
    """Optional unique reference string for idempotency"""

    specific_content: Optional[Any] = Field(default=UNSET, alias="SpecificContent")
    """Custom key-value payload data for the queue item"""

    output: Optional[Any] = Field(default=UNSET, alias="Output")
    """Output data written by the robot after processing"""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """ISO 8601 timestamp when the item was added to the queue"""

    start_processing: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartProcessing")
    """ISO 8601 timestamp when processing began"""

    end_processing: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndProcessing")
    """ISO 8601 timestamp when processing ended"""

    retry_number: Optional[int] = Field(default=UNSET, alias="RetryNumber")
    """Number of times this item has been retried"""

    due_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="DueDate")
    """Optional deadline for processing the item"""


class QueueItemDict(TypedDict):
    id: NotRequired[int]
    key: NotRequired[UUID]
    queue_definition_id: NotRequired[int]
    status: NotRequired[StatusUiPathOrchestratorQueueItemsApiOrStr]
    review_status: NotRequired[ReviewStatusOrStr]
    priority: NotRequired[Priority1OrStr]
    reference: NotRequired[str]
    specific_content: NotRequired[Any]
    output: NotRequired[Any]
    creation_time: NotRequired[RFC3339DateTime]
    start_processing: NotRequired[RFC3339DateTime]
    end_processing: NotRequired[RFC3339DateTime]
    retry_number: NotRequired[int]
    due_date: NotRequired[RFC3339DateTime]
