from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget29(str, Enum):
    STORAGE_GATEWAY_20130630_CREATE_SMB_FILE_SHARE = "StorageGateway_20130630.CreateSMBFileShare"

    __str__ = str.__str__


XAmzTarget29OrStr: TypeAlias = Annotated[XAmzTarget29 | str, open_enum_validator(XAmzTarget29)]
