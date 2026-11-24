from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonSimpleQueueServiceQueuesApi(str, Enum):
    AMAZON_SQS_UNTAG_QUEUE = "AmazonSQS.UntagQueue"

    __str__ = str.__str__


XAmzTarget4AmazonSimpleQueueServiceQueuesApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonSimpleQueueServiceQueuesApi | str,
    open_enum_validator(XAmzTarget4AmazonSimpleQueueServiceQueuesApi),
]
