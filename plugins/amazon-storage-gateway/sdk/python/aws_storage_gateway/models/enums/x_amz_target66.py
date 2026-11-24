from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget66(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_BANDWIDTH_RATE_LIMIT_SCHEDULE = "StorageGateway_20130630.UpdateBandwidthRateLimitSchedule"

    __str__ = str.__str__


XAmzTarget66OrStr: TypeAlias = Annotated[XAmzTarget66 | str, open_enum_validator(XAmzTarget66)]
