from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget32(str, Enum):
    STORAGE_GATEWAY_20130630_CREATE_SNAPSHOT = "StorageGateway_20130630.CreateSnapshot"

    __str__ = str.__str__


XAmzTarget32OrStr: TypeAlias = Annotated[XAmzTarget32 | str, open_enum_validator(XAmzTarget32)]
