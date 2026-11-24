from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget57(str, Enum):
    STORAGE_GATEWAY_20130630_START_GATEWAY = "StorageGateway_20130630.StartGateway"

    __str__ = str.__str__


XAmzTarget57OrStr: TypeAlias = Annotated[XAmzTarget57 | str, open_enum_validator(XAmzTarget57)]
