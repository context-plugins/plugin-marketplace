from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget65(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_BANDWIDTH_RATE_LIMIT_SCHEDULE = "StorageGateway_20130630.DescribeBandwidthRateLimitSchedule"

    __str__ = str.__str__


XAmzTarget65OrStr: TypeAlias = Annotated[XAmzTarget65 | str, open_enum_validator(XAmzTarget65)]
