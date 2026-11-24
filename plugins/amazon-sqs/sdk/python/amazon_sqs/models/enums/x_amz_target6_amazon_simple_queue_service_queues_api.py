from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6AmazonSimpleQueueServiceQueuesApi(str, Enum):
    AMAZON_SQS_GET_QUEUE_ATTRIBUTES = "AmazonSQS.GetQueueAttributes"

    __str__ = str.__str__


XAmzTarget6AmazonSimpleQueueServiceQueuesApiOrStr: TypeAlias = Annotated[
    XAmzTarget6AmazonSimpleQueueServiceQueuesApi | str,
    open_enum_validator(XAmzTarget6AmazonSimpleQueueServiceQueuesApi),
]
