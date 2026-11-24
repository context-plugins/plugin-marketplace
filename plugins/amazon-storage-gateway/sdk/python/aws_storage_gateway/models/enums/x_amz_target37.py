from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget37(str, Enum):
    STORAGE_GATEWAY_20130630_DELETE_TAPE_POOL = "StorageGateway_20130630.DeleteTapePool"

    __str__ = str.__str__


XAmzTarget37OrStr: TypeAlias = Annotated[XAmzTarget37 | str, open_enum_validator(XAmzTarget37)]
