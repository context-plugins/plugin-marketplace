from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget53(str, Enum):
    STORAGE_GATEWAY_20130630_DELETE_FILE_SHARE = "StorageGateway_20130630.DeleteFileShare"

    __str__ = str.__str__


XAmzTarget53OrStr: TypeAlias = Annotated[XAmzTarget53 | str, open_enum_validator(XAmzTarget53)]
