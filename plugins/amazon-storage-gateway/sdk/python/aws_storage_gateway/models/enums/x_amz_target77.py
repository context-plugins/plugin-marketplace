from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget77(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_VOLUME_INITIATORS = "StorageGateway_20130630.ListVolumeInitiators"

    __str__ = str.__str__


XAmzTarget77OrStr: TypeAlias = Annotated[XAmzTarget77 | str, open_enum_validator(XAmzTarget77)]
