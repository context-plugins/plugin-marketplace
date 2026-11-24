from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget72(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_MAINTENANCE_START_TIME = "StorageGateway_20130630.UpdateMaintenanceStartTime"

    __str__ = str.__str__


XAmzTarget72OrStr: TypeAlias = Annotated[XAmzTarget72 | str, open_enum_validator(XAmzTarget72)]
