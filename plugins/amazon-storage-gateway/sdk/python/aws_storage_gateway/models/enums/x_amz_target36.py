from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget36(str, Enum):
    STORAGE_GATEWAY_20130630_CREATE_TAPE_POOL = "StorageGateway_20130630.CreateTapePool"

    __str__ = str.__str__


XAmzTarget36OrStr: TypeAlias = Annotated[XAmzTarget36 | str, open_enum_validator(XAmzTarget36)]
