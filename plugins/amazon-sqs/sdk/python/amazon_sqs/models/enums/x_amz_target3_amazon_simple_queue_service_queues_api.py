from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonSimpleQueueServiceQueuesApi(str, Enum):
    AMAZON_SQS_TAG_QUEUE = "AmazonSQS.TagQueue"

    __str__ = str.__str__


XAmzTarget3AmazonSimpleQueueServiceQueuesApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonSimpleQueueServiceQueuesApi | str,
    open_enum_validator(XAmzTarget3AmazonSimpleQueueServiceQueuesApi),
]
