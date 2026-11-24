from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAwsStorageGatewayCacheReportApi(str, Enum):
    STORAGE_GATEWAY_20130630_CANCEL_CACHE_REPORT = "StorageGateway_20130630.CancelCacheReport"

    __str__ = str.__str__


XAmzTargetAwsStorageGatewayCacheReportApiOrStr: TypeAlias = Annotated[
    XAmzTargetAwsStorageGatewayCacheReportApi | str, open_enum_validator(XAmzTargetAwsStorageGatewayCacheReportApi)
]
