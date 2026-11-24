from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget58(str, Enum):
    STORAGE_GATEWAY_20130630_DELETE_SNAPSHOT_SCHEDULE = "StorageGateway_20130630.DeleteSnapshotSchedule"

    __str__ = str.__str__


XAmzTarget58OrStr: TypeAlias = Annotated[XAmzTarget58 | str, open_enum_validator(XAmzTarget58)]
