from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SendMessageBatchResultEntry(SdkBaseModel):
    id: str = Field(alias="Id")
    """An identifier for the message in this batch."""

    message_id: str = Field(alias="MessageId")
    """An identifier for the message."""

    md5_of_message_body: str = Field(alias="MD5OfMessageBody")
    """An MD5 digest of the non-URL-encoded message body string. You can use this attribute to verify that Amazon SQS
    received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information
    about MD5, see RFC1321."""

    md5_of_message_attributes: Optional[str] = Field(default=UNSET, alias="MD5OfMessageAttributes")
    """An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon
    SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For
    information about MD5, see RFC1321."""

    md5_of_message_system_attributes: Optional[str] = Field(default=UNSET, alias="MD5OfMessageSystemAttributes")
    """An MD5 digest of the non-URL-encoded message system attribute string. You can use this attribute to verify that
    Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For
    information about MD5, see RFC1321."""

    sequence_number: Optional[str] = Field(default=UNSET, alias="SequenceNumber")
    """This parameter applies only to FIFO (first-in-first-out) queues. The large, non-consecutive number that Amazon
    SQS assigns to each message. The length of SequenceNumber is 128 bits. As SequenceNumber continues to increase for a
    particular MessageGroupId."""


class SendMessageBatchResultEntryDict(TypedDict):
    id: str
    message_id: str
    md5_of_message_body: str
    md5_of_message_attributes: NotRequired[str]
    md5_of_message_system_attributes: NotRequired[str]
    sequence_number: NotRequired[str]
