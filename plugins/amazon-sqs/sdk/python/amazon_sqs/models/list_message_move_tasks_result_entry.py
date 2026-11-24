from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListMessageMoveTasksResultEntry(SdkBaseModel):
    task_handle: Optional[str] = Field(default=UNSET, alias="TaskHandle")
    """An identifier associated with a message movement task. When this field is returned in the response of the
    ListMessageMoveTasks action, it is only populated for tasks that are in RUNNING status."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the message movement task. Possible values are: RUNNING, COMPLETED, CANCELLING, CANCELLED, and
    FAILED."""

    source_arn: Optional[str] = Field(default=UNSET, alias="SourceArn")
    """The ARN of the queue that contains the messages to be moved to another queue."""

    destination_arn: Optional[str] = Field(default=UNSET, alias="DestinationArn")
    """The ARN of the destination queue if it has been specified in the StartMessageMoveTask request. If a
    DestinationArn has not been specified in the StartMessageMoveTask request, this field value will be NULL."""

    max_number_of_messages_per_second: Optional[int] = Field(default=UNSET, alias="MaxNumberOfMessagesPerSecond")
    """The number of messages to be moved per second (the message movement rate), if it has been specified in the
    StartMessageMoveTask request. If a MaxNumberOfMessagesPerSecond has not been specified in the StartMessageMoveTask
    request, this field value will be NULL."""

    approximate_number_of_messages_moved: Optional[int] = Field(default=UNSET, alias="ApproximateNumberOfMessagesMoved")
    """The approximate number of messages already moved to the destination queue."""

    approximate_number_of_messages_to_move: Optional[int] = Field(
        default=UNSET, alias="ApproximateNumberOfMessagesToMove"
    )
    """The number of messages to be moved from the source queue. This number is obtained at the time of starting the
    message movement task and is only included after the message movement task is selected to start."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """The task failure reason (only included if the task status is FAILED)."""

    started_timestamp: Optional[int] = Field(default=UNSET, alias="StartedTimestamp")
    """The timestamp of starting the message movement task."""


class ListMessageMoveTasksResultEntryDict(TypedDict):
    task_handle: NotRequired[str]
    status: NotRequired[str]
    source_arn: NotRequired[str]
    destination_arn: NotRequired[str]
    max_number_of_messages_per_second: NotRequired[int]
    approximate_number_of_messages_moved: NotRequired[int]
    approximate_number_of_messages_to_move: NotRequired[int]
    failure_reason: NotRequired[str]
    started_timestamp: NotRequired[int]
