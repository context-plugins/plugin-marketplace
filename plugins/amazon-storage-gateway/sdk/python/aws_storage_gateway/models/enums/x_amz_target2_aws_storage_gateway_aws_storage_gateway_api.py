from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi(str, Enum):
    STORAGE_GATEWAY_20130630_JOIN_DOMAIN = "StorageGateway_20130630.JoinDomain"

    __str__ = str.__str__


XAmzTarget2AwsStorageGatewayAwsStorageGatewayApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi | str,
    open_enum_validator(XAmzTarget2AwsStorageGatewayAwsStorageGatewayApi),
]
