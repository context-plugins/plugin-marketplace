from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget49(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_BANDWIDTH_RATE_LIMIT = "StorageGateway_20130630.UpdateBandwidthRateLimit"

    __str__ = str.__str__


XAmzTarget49OrStr: TypeAlias = Annotated[XAmzTarget49 | str, open_enum_validator(XAmzTarget49)]
