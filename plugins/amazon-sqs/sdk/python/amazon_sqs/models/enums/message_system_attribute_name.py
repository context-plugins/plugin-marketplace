from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MessageSystemAttributeName(str, Enum):
    ALL = "All"
    SENDER_ID = "SenderId"
    SENT_TIMESTAMP = "SentTimestamp"
    APPROXIMATE_RECEIVE_COUNT = "ApproximateReceiveCount"
    APPROXIMATE_FIRST_RECEIVE_TIMESTAMP = "ApproximateFirstReceiveTimestamp"
    SEQUENCE_NUMBER = "SequenceNumber"
    MESSAGE_DEDUPLICATION_ID = "MessageDeduplicationId"
    MESSAGE_GROUP_ID = "MessageGroupId"
    AWS_TRACE_HEADER = "AWSTraceHeader"
    DEAD_LETTER_QUEUE_SOURCE_ARN = "DeadLetterQueueSourceArn"

    __str__ = str.__str__


MessageSystemAttributeNameOrStr: TypeAlias = Annotated[
    MessageSystemAttributeName | str, open_enum_validator(MessageSystemAttributeName)
]
