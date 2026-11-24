from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonSimpleQueueServicePermissionsApi(str, Enum):
    AMAZON_SQS_REMOVE_PERMISSION = "AmazonSQS.RemovePermission"

    __str__ = str.__str__


XAmzTarget1AmazonSimpleQueueServicePermissionsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonSimpleQueueServicePermissionsApi | str,
    open_enum_validator(XAmzTarget1AmazonSimpleQueueServicePermissionsApi),
]
