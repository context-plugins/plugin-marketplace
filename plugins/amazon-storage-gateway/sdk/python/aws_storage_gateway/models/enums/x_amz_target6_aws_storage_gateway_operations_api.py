from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6AwsStorageGatewayOperationsApi(str, Enum):
    STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_ARCHIVE = "StorageGateway_20130630.RetrieveTapeArchive"

    __str__ = str.__str__


XAmzTarget6AwsStorageGatewayOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget6AwsStorageGatewayOperationsApi | str, open_enum_validator(XAmzTarget6AwsStorageGatewayOperationsApi)
]
