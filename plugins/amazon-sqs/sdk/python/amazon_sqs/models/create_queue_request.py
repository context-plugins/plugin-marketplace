from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateQueueRequest(SdkBaseModel):
    queue_name: str = Field(alias="QueueName")
    """The name of the new queue. The following limits apply to this name: A queue name can have up to 80 characters.
    Valid values: alphanumeric characters, hyphens (-), and underscores (_). A FIFO queue name must end with the .fifo
    suffix. Queue URLs and names are case-sensitive."""

    attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="Attributes")
    """A map of attributes with their corresponding values. The following lists the names, descriptions, and values of
    the special request parameters that the CreateQueue action uses: DelaySeconds – The length of time, in seconds, for
    which the delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 seconds (15
    minutes). Default: 0. MaximumMessageSize – The limit of how many bytes a message can contain before Amazon SQS
    rejects it. Valid values: An integer from 1,024 bytes (1 KiB) to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes
    (1 MiB). MessageRetentionPeriod – T"""

    tags: Optional[dict[str, str]] = UNSET
    """Add cost allocation tags to the specified Amazon SQS queue. For an overview, see Tagging Your Amazon SQS Queues
    in the Amazon SQS Developer Guide. When you use queue tags, keep the following guidelines in mind: Adding more than
    50 tags to a queue isn't recommended. Tags don't have any semantic meaning. Amazon SQS interprets tags as character
    strings. Tags are case-sensitive. A new tag with a key identical to that of an existing tag overwrites the existing
    tag. For a full list of tag restrictions, see Quotas related to queues in the Amazon SQS Developer Guide. To be able
    to tag a queue on creat"""


class CreateQueueRequestDict(TypedDict):
    queue_name: str
    attributes: NotRequired[dict[str, str]]
    tags: NotRequired[dict[str, str]]
