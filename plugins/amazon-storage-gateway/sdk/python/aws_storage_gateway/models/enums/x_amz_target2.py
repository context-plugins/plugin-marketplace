from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2(str, Enum):
    STORAGE_GATEWAY_20130630_CREATE_NFS_FILE_SHARE = "StorageGateway_20130630.CreateNFSFileShare"

    __str__ = str.__str__


XAmzTarget2OrStr: TypeAlias = Annotated[XAmzTarget2 | str, open_enum_validator(XAmzTarget2)]
