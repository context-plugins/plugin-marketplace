from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget9AmazonSimpleQueueServiceQueuesApi(str, Enum):
    AMAZON_SQS_LIST_DEAD_LETTER_SOURCE_QUEUES = "AmazonSQS.ListDeadLetterSourceQueues"

    __str__ = str.__str__


XAmzTarget9AmazonSimpleQueueServiceQueuesApiOrStr: TypeAlias = Annotated[
    XAmzTarget9AmazonSimpleQueueServiceQueuesApi | str,
    open_enum_validator(XAmzTarget9AmazonSimpleQueueServiceQueuesApi),
]
