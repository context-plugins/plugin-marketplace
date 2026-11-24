from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget7AmazonSimpleQueueServiceQueuesApi(str, Enum):
    AMAZON_SQS_SET_QUEUE_ATTRIBUTES = "AmazonSQS.SetQueueAttributes"

    __str__ = str.__str__


XAmzTarget7AmazonSimpleQueueServiceQueuesApiOrStr: TypeAlias = Annotated[
    XAmzTarget7AmazonSimpleQueueServiceQueuesApi | str,
    open_enum_validator(XAmzTarget7AmazonSimpleQueueServiceQueuesApi),
]
