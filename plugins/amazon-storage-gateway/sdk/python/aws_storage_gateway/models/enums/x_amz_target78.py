from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget78(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_VOLUME_RECOVERY_POINTS = "StorageGateway_20130630.ListVolumeRecoveryPoints"

    __str__ = str.__str__


XAmzTarget78OrStr: TypeAlias = Annotated[XAmzTarget78 | str, open_enum_validator(XAmzTarget78)]
