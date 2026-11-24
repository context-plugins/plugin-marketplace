from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget33(str, Enum):
    STORAGE_GATEWAY_20130630_CREATE_SNAPSHOT_FROM_VOLUME_RECOVERY_POINT = "StorageGateway_20130630.CreateSnapshotFromVolumeRecoveryPoint"

    __str__ = str.__str__


XAmzTarget33OrStr: TypeAlias = Annotated[XAmzTarget33 | str, open_enum_validator(XAmzTarget33)]
