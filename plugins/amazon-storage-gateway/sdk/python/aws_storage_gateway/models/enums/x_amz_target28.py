from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget28(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_NFS_FILE_SHARE = "StorageGateway_20130630.UpdateNFSFileShare"

    __str__ = str.__str__


XAmzTarget28OrStr: TypeAlias = Annotated[XAmzTarget28 | str, open_enum_validator(XAmzTarget28)]
