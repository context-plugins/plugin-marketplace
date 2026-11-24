from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget69(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_FILE_SYSTEM_ASSOCIATION = "StorageGateway_20130630.UpdateFileSystemAssociation"

    __str__ = str.__str__


XAmzTarget69OrStr: TypeAlias = Annotated[XAmzTarget69 | str, open_enum_validator(XAmzTarget69)]
