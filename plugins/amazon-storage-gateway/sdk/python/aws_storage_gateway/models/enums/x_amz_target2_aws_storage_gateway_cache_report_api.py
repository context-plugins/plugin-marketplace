from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AwsStorageGatewayCacheReportApi(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_CACHE_REPORT = "StorageGateway_20130630.DescribeCacheReport"

    __str__ = str.__str__


XAmzTarget2AwsStorageGatewayCacheReportApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AwsStorageGatewayCacheReportApi | str, open_enum_validator(XAmzTarget2AwsStorageGatewayCacheReportApi)
]
