from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonSimpleQueueServiceQueuesApi(str, Enum):
    AMAZON_SQS_LIST_QUEUES = "AmazonSQS.ListQueues"

    __str__ = str.__str__


XAmzTarget2AmazonSimpleQueueServiceQueuesApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonSimpleQueueServiceQueuesApi | str,
    open_enum_validator(XAmzTarget2AmazonSimpleQueueServiceQueuesApi),
]
