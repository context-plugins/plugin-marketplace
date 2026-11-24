from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonSimpleQueueServiceQueuesApi(str, Enum):
    AMAZON_SQS_DELETE_QUEUE = "AmazonSQS.DeleteQueue"

    __str__ = str.__str__


XAmzTarget1AmazonSimpleQueueServiceQueuesApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonSimpleQueueServiceQueuesApi | str,
    open_enum_validator(XAmzTarget1AmazonSimpleQueueServiceQueuesApi),
]
