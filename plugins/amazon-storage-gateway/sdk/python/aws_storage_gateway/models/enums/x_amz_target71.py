from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget71(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_MAINTENANCE_START_TIME = "StorageGateway_20130630.DescribeMaintenanceStartTime"

    __str__ = str.__str__


XAmzTarget71OrStr: TypeAlias = Annotated[XAmzTarget71 | str, open_enum_validator(XAmzTarget71)]
