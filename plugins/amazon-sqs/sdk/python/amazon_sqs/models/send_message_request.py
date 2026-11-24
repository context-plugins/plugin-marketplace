from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message_attribute_value import MessageAttributeValue, MessageAttributeValueDict
from .message_system_attribute_value import MessageSystemAttributeValue, MessageSystemAttributeValueDict


class SendMessageRequest(SdkBaseModel):
    queue_url: str = Field(alias="QueueUrl")
    """The URL of the Amazon SQS queue to which a message is sent. Queue URLs and names are case-sensitive."""

    message_body: str = Field(alias="MessageBody")
    """The message to send. The minimum size is one character. The maximum size is 1 MiB or 1,048,576 bytes A message
    can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more
    information, see the W3C specification for characters. #x9 | #xA | #xD | #x20 to #xD7FF | #xE000 to #xFFFD | #x10000
    to #x10FFFF If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an
    InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this
    exception."""

    delay_seconds: Optional[int] = Field(default=UNSET, alias="DelaySeconds")
    """The length of time, in seconds, for which to delay a specific message. Valid values: 0 to 900. Maximum: 15
    minutes. Messages with a positive DelaySeconds value become available for processing after the delay period is
    finished. If you don't specify a value, the default value for the queue applies. When you set FifoQueue, you can't
    set DelaySeconds per message. You can set this parameter only on a queue level."""

    message_attributes: Optional[dict[str, MessageAttributeValue]] = Field(default=UNSET, alias="MessageAttributes")
    """Each message attribute consists of a Name, Type, and Value. For more information, see Amazon SQS message
    attributes in the Amazon SQS Developer Guide."""

    message_system_attributes: Optional[dict[str, MessageSystemAttributeValue]] = Field(
        default=UNSET, alias="MessageSystemAttributes"
    )
    """The message system attribute to send. Each message system attribute consists of a Name, Type, and Value.
    Currently, the only supported message system attribute is AWSTraceHeader. Its type must be String and its value must
    be a correctly formatted X-Ray trace header string. The size of a message system attribute doesn't count towards the
    total size of a message."""

    message_deduplication_id: Optional[str] = Field(default=UNSET, alias="MessageDeduplicationId")
    """This parameter applies only to FIFO (first-in-first-out) queues. The token used for deduplication of sent
    messages. If a message with a particular MessageDeduplicationId is sent successfully, any messages sent with the
    same MessageDeduplicationId are accepted successfully but aren't delivered during the 5-minute deduplication
    interval. For more information, see Exactly-once processing in the Amazon SQS Developer Guide. Every message must
    have a unique MessageDeduplicationId, You may provide a MessageDeduplicationId explicitly. If you aren't able to
    provide a MessageDeduplicationId and you enab"""

    message_group_id: Optional[str] = Field(default=UNSET, alias="MessageGroupId")
    """MessageGroupId is an attribute used in Amazon SQS FIFO (First-In-First-Out) and standard queues. In FIFO queues,
    MessageGroupId organizes messages into distinct groups. Messages within the same message group are always processed
    one at a time, in strict order, ensuring that no two messages from the same group are processed simultaneously. In
    standard queues, using MessageGroupId enables fair queues. It is used to identify the tenant a message belongs to,
    helping maintain consistent message dwell time across all tenants during noisy neighbor events. Unlike FIFO queues,
    messages with the same Me"""


class SendMessageRequestDict(TypedDict):
    queue_url: str
    message_body: str
    delay_seconds: NotRequired[int]
    message_attributes: NotRequired[dict[str, MessageAttributeValueDict]]
    message_system_attributes: NotRequired[dict[str, MessageSystemAttributeValueDict]]
    message_deduplication_id: NotRequired[str]
    message_group_id: NotRequired[str]
