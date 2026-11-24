from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget83(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_SMB_LOCAL_GROUPS = "StorageGateway_20130630.UpdateSMBLocalGroups"

    __str__ = str.__str__


XAmzTarget83OrStr: TypeAlias = Annotated[XAmzTarget83 | str, open_enum_validator(XAmzTarget83)]
