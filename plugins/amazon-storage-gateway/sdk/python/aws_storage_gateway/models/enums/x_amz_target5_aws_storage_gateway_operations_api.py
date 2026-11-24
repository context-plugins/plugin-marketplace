from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5AwsStorageGatewayOperationsApi(str, Enum):
    STORAGE_GATEWAY_20130630_REFRESH_CACHE = "StorageGateway_20130630.RefreshCache"

    __str__ = str.__str__


XAmzTarget5AwsStorageGatewayOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget5AwsStorageGatewayOperationsApi | str, open_enum_validator(XAmzTarget5AwsStorageGatewayOperationsApi)
]
