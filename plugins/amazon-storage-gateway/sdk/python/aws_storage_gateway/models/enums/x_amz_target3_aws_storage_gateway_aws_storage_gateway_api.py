from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi(str, Enum):
    STORAGE_GATEWAY_20130630_NOTIFY_WHEN_UPLOADED = "StorageGateway_20130630.NotifyWhenUploaded"

    __str__ = str.__str__


XAmzTarget3AwsStorageGatewayAwsStorageGatewayApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi | str,
    open_enum_validator(XAmzTarget3AwsStorageGatewayAwsStorageGatewayApi),
]
