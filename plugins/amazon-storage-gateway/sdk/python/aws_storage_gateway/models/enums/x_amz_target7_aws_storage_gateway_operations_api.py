from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget7AwsStorageGatewayOperationsApi(str, Enum):
    STORAGE_GATEWAY_20130630_RETRIEVE_TAPE_RECOVERY_POINT = "StorageGateway_20130630.RetrieveTapeRecoveryPoint"

    __str__ = str.__str__


XAmzTarget7AwsStorageGatewayOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget7AwsStorageGatewayOperationsApi | str, open_enum_validator(XAmzTarget7AwsStorageGatewayOperationsApi)
]
