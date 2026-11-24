from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsStorageGatewayOperationsApi(str, Enum):
    STORAGE_GATEWAY_20130630_EVICT_FILES_FAILING_UPLOAD = "StorageGateway_20130630.EvictFilesFailingUpload"

    __str__ = str.__str__


XAmzTarget2AwsStorageGatewayOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsStorageGatewayOperationsApi | str, open_enum_validator(XAmzTarget2AwsStorageGatewayOperationsApi)
]
