from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5AmazonSimpleQueueServiceQueuesApi(str, Enum):
    AMAZON_SQS_PURGE_QUEUE = "AmazonSQS.PurgeQueue"

    __str__ = str.__str__


XAmzTarget5AmazonSimpleQueueServiceQueuesApiOrStr: TypeAlias = Annotated[
    XAmzTarget5AmazonSimpleQueueServiceQueuesApi | str,
    open_enum_validator(XAmzTarget5AmazonSimpleQueueServiceQueuesApi),
]
