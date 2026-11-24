from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget21(str, Enum):
    STORAGE_GATEWAY_20130630_DELETE_VOLUME = "StorageGateway_20130630.DeleteVolume"

    __str__ = str.__str__


XAmzTarget21OrStr: TypeAlias = Annotated[XAmzTarget21 | str, open_enum_validator(XAmzTarget21)]
