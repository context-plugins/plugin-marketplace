from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonSimpleQueueServiceQueuesApi(str, Enum):
    AMAZON_SQS_CREATE_QUEUE = "AmazonSQS.CreateQueue"

    __str__ = str.__str__


XAmzTargetAmazonSimpleQueueServiceQueuesApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonSimpleQueueServiceQueuesApi | str, open_enum_validator(XAmzTargetAmazonSimpleQueueServiceQueuesApi)
]
