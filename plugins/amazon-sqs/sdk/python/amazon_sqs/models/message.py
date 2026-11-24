from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .message_attribute_value import MessageAttributeValue, MessageAttributeValueDict


class Message(SdkBaseModel):
    message_id: Optional[str] = Field(default=UNSET, alias="MessageId")
    """A unique identifier for the message. A MessageIdis considered unique across all Amazon Web Services accounts for
    an extended period of time."""

    receipt_handle: Optional[str] = Field(default=UNSET, alias="ReceiptHandle")
    """An identifier associated with the act of receiving the message. A new receipt handle is returned every time you
    receive a message. When deleting a message, you provide the last received receipt handle to delete the message."""

    md5_of_body: Optional[str] = Field(default=UNSET, alias="MD5OfBody")
    """An MD5 digest of the non-URL-encoded message body string."""

    body: Optional[str] = Field(default=UNSET, alias="Body")
    """The message's contents (not URL-encoded)."""

    attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="Attributes")
    """A map of the attributes requested in ReceiveMessage to their respective values. Supported attributes:
    ApproximateReceiveCount ApproximateFirstReceiveTimestamp MessageDeduplicationId MessageGroupId SenderId
    SentTimestamp SequenceNumber ApproximateFirstReceiveTimestamp and SentTimestamp are each returned as an integer
    representing the epoch time in milliseconds."""

    md5_of_message_attributes: Optional[str] = Field(default=UNSET, alias="MD5OfMessageAttributes")
    """An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon
    SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For
    information about MD5, see RFC1321."""

    message_attributes: Optional[dict[str, MessageAttributeValue]] = Field(default=UNSET, alias="MessageAttributes")
    """Each message attribute consists of a Name, Type, and Value. For more information, see Amazon SQS message
    attributes in the Amazon SQS Developer Guide."""


class MessageDict(TypedDict):
    message_id: NotRequired[str]
    receipt_handle: NotRequired[str]
    md5_of_body: NotRequired[str]
    body: NotRequired[str]
    attributes: NotRequired[dict[str, str]]
    md5_of_message_attributes: NotRequired[str]
    message_attributes: NotRequired[dict[str, MessageAttributeValueDict]]
