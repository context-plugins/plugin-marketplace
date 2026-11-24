from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonSimpleQueueServicePermissionsApi(str, Enum):
    AMAZON_SQS_ADD_PERMISSION = "AmazonSQS.AddPermission"

    __str__ = str.__str__


XAmzTargetAmazonSimpleQueueServicePermissionsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonSimpleQueueServicePermissionsApi | str,
    open_enum_validator(XAmzTargetAmazonSimpleQueueServicePermissionsApi),
]
