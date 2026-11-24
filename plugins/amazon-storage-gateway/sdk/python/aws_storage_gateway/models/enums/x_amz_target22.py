from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget22(str, Enum):
    STORAGE_GATEWAY_20130630_DETACH_VOLUME = "StorageGateway_20130630.DetachVolume"

    __str__ = str.__str__


XAmzTarget22OrStr: TypeAlias = Annotated[XAmzTarget22 | str, open_enum_validator(XAmzTarget22)]
