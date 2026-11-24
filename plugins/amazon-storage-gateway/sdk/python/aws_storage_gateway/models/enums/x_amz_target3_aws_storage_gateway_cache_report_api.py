from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AwsStorageGatewayCacheReportApi(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_CACHE_REPORTS = "StorageGateway_20130630.ListCacheReports"

    __str__ = str.__str__


XAmzTarget3AwsStorageGatewayCacheReportApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AwsStorageGatewayCacheReportApi | str, open_enum_validator(XAmzTarget3AwsStorageGatewayCacheReportApi)
]
