from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget60(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_SNAPSHOT_SCHEDULE = "StorageGateway_20130630.UpdateSnapshotSchedule"

    __str__ = str.__str__


XAmzTarget60OrStr: TypeAlias = Annotated[XAmzTarget60 | str, open_enum_validator(XAmzTarget60)]
