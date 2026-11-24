from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget64(str, Enum):
    STORAGE_GATEWAY_20130630_START_AVAILABILITY_MONITOR_TEST = "StorageGateway_20130630.StartAvailabilityMonitorTest"

    __str__ = str.__str__


XAmzTarget64OrStr: TypeAlias = Annotated[XAmzTarget64 | str, open_enum_validator(XAmzTarget64)]
