from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonSimpleQueueServiceTagsApi(str, Enum):
    AMAZON_SQS_UNTAG_QUEUE = "AmazonSQS.UntagQueue"

    __str__ = str.__str__


XAmzTarget1AmazonSimpleQueueServiceTagsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonSimpleQueueServiceTagsApi | str, open_enum_validator(XAmzTarget1AmazonSimpleQueueServiceTagsApi)
]
