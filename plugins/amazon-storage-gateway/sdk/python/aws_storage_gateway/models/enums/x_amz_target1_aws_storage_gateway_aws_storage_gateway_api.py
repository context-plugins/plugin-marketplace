from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi(str, Enum):
    STORAGE_GATEWAY_20130630_ASSIGN_TAPE_POOL = "StorageGateway_20130630.AssignTapePool"

    __str__ = str.__str__


XAmzTarget1AwsStorageGatewayAwsStorageGatewayApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi | str,
    open_enum_validator(XAmzTarget1AwsStorageGatewayAwsStorageGatewayApi),
]
