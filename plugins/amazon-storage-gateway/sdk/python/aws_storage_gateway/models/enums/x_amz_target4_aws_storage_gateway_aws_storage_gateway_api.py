from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi(str, Enum):
    STORAGE_GATEWAY_20130630_REFRESH_CACHE = "StorageGateway_20130630.RefreshCache"

    __str__ = str.__str__


XAmzTarget4AwsStorageGatewayAwsStorageGatewayApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi | str,
    open_enum_validator(XAmzTarget4AwsStorageGatewayAwsStorageGatewayApi),
]
