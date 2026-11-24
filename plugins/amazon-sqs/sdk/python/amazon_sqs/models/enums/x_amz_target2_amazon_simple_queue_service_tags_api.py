from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonSimpleQueueServiceTagsApi(str, Enum):
    AMAZON_SQS_LIST_QUEUE_TAGS = "AmazonSQS.ListQueueTags"

    __str__ = str.__str__


XAmzTarget2AmazonSimpleQueueServiceTagsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonSimpleQueueServiceTagsApi | str, open_enum_validator(XAmzTarget2AmazonSimpleQueueServiceTagsApi)
]
