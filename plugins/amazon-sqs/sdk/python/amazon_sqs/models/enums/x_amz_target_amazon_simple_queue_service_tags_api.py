from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonSimpleQueueServiceTagsApi(str, Enum):
    AMAZON_SQS_TAG_QUEUE = "AmazonSQS.TagQueue"

    __str__ = str.__str__


XAmzTargetAmazonSimpleQueueServiceTagsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonSimpleQueueServiceTagsApi | str, open_enum_validator(XAmzTargetAmazonSimpleQueueServiceTagsApi)
]
