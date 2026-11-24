from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget10(str, Enum):
    STORAGE_GATEWAY_20130630_RESET_CACHE = "StorageGateway_20130630.ResetCache"

    __str__ = str.__str__


XAmzTarget10OrStr: TypeAlias = Annotated[XAmzTarget10 | str, open_enum_validator(XAmzTarget10)]
