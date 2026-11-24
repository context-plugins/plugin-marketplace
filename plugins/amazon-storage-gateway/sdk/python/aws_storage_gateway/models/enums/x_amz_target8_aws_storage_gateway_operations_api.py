from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget8AwsStorageGatewayOperationsApi(str, Enum):
    STORAGE_GATEWAY_20130630_SHUTDOWN_GATEWAY = "StorageGateway_20130630.ShutdownGateway"

    __str__ = str.__str__


XAmzTarget8AwsStorageGatewayOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget8AwsStorageGatewayOperationsApi | str, open_enum_validator(XAmzTarget8AwsStorageGatewayOperationsApi)
]
