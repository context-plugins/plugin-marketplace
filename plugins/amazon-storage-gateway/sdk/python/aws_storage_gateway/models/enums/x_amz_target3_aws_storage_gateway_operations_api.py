from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsStorageGatewayOperationsApi(str, Enum):
    STORAGE_GATEWAY_20130630_JOIN_DOMAIN = "StorageGateway_20130630.JoinDomain"

    __str__ = str.__str__


XAmzTarget3AwsStorageGatewayOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsStorageGatewayOperationsApi | str, open_enum_validator(XAmzTarget3AwsStorageGatewayOperationsApi)
]
