from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AwsStorageGatewayCacheReportApi(str, Enum):
    STORAGE_GATEWAY_20130630_DELETE_CACHE_REPORT = "StorageGateway_20130630.DeleteCacheReport"

    __str__ = str.__str__


XAmzTarget1AwsStorageGatewayCacheReportApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AwsStorageGatewayCacheReportApi | str, open_enum_validator(XAmzTarget1AwsStorageGatewayCacheReportApi)
]
