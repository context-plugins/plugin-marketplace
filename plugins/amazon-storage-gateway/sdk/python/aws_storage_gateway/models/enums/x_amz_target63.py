from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget63(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_AVAILABILITY_MONITOR_TEST = "StorageGateway_20130630.DescribeAvailabilityMonitorTest"

    __str__ = str.__str__


XAmzTarget63OrStr: TypeAlias = Annotated[XAmzTarget63 | str, open_enum_validator(XAmzTarget63)]
