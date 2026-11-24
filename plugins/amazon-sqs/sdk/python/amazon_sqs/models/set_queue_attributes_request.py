from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SetQueueAttributesRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue whose attributes are set. Queue URLs and names are case-sensitive."""

    attributes: dict[str, str] = Field(alias="Attributes")
    """A map of attributes to set. The following lists the names, descriptions, and values of the special request
    parameters that the SetQueueAttributes action uses: DelaySeconds – The length of time, in seconds, for which the
    delivery of all messages in the queue is delayed. Valid values: An integer from 0 to 900 (15 minutes). Default: 0.
    MaximumMessageSize – The limit of how many bytes a message can contain before Amazon SQS rejects it. Valid values:
    An integer from 1,024 bytes (1 KiB) up to 1,048,576 bytes (1 MiB). Default: 1,048,576 bytes (1 MiB).
    MessageRetentionPeriod – The length of time, in s"""


class SetQueueAttributesRequestDict(TypedDict):
    queue_url: str
    attributes: dict[str, str]
