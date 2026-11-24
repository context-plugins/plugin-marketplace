from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AwsStorageGatewayCacheReportApi(str, Enum):
    STORAGE_GATEWAY_20130630_START_CACHE_REPORT = "StorageGateway_20130630.StartCacheReport"

    __str__ = str.__str__


XAmzTarget4AwsStorageGatewayCacheReportApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AwsStorageGatewayCacheReportApi | str, open_enum_validator(XAmzTarget4AwsStorageGatewayCacheReportApi)
]
