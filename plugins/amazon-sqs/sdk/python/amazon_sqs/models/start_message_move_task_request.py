from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class StartMessageMoveTaskRequest(SdkBaseModel):
    source_arn: str = Field(alias="SourceArn")
    """The ARN of the queue that contains the messages to be moved to another queue. Currently, only ARNs of dead-letter
    queues (DLQs) whose sources are other Amazon SQS queues are accepted. DLQs whose sources are non-SQS queues, such as
    Lambda or Amazon SNS topics, are not currently supported."""

    destination_arn: Optional[str] = Field(default=UNSET, alias="DestinationArn")
    """The ARN of the queue that receives the moved messages. You can use this field to specify the destination queue
    where you would like to redrive messages. If this field is left blank, the messages will be redriven back to their
    respective original source queues."""

    max_number_of_messages_per_second: Optional[int] = Field(default=UNSET, alias="MaxNumberOfMessagesPerSecond")
    """The number of messages to be moved per second (the message movement rate). You can use this field to define a
    fixed message movement rate. The maximum value for messages per second is 500. If this field is left blank, the
    system will optimize the rate based on the queue message backlog size, which may vary throughout the duration of the
    message movement task."""


class StartMessageMoveTaskRequestDict(TypedDict):
    source_arn: str
    destination_arn: NotRequired[str]
    max_number_of_messages_per_second: NotRequired[int]
