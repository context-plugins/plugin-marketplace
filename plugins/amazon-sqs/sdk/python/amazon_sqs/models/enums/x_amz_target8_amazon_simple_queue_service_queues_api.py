from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget8AmazonSimpleQueueServiceQueuesApi(str, Enum):
    AMAZON_SQS_GET_QUEUE_URL = "AmazonSQS.GetQueueUrl"

    __str__ = str.__str__


XAmzTarget8AmazonSimpleQueueServiceQueuesApiOrStr: TypeAlias = Annotated[
    XAmzTarget8AmazonSimpleQueueServiceQueuesApi | str,
    open_enum_validator(XAmzTarget8AmazonSimpleQueueServiceQueuesApi),
]
