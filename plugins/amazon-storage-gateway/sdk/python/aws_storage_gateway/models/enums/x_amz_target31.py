from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget31(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_SMB_FILE_SHARE = "StorageGateway_20130630.UpdateSMBFileShare"

    __str__ = str.__str__


XAmzTarget31OrStr: TypeAlias = Annotated[XAmzTarget31 | str, open_enum_validator(XAmzTarget31)]
