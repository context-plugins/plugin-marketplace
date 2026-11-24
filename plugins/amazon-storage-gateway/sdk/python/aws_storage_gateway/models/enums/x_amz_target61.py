from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget61(str, Enum):
    STORAGE_GATEWAY_20130630_DELETE_TAPE_ARCHIVE = "StorageGateway_20130630.DeleteTapeArchive"

    __str__ = str.__str__


XAmzTarget61OrStr: TypeAlias = Annotated[XAmzTarget61 | str, open_enum_validator(XAmzTarget61)]
