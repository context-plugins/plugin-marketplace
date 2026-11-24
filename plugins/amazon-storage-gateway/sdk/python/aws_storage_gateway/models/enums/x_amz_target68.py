from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget68(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_FILE_SYSTEM_ASSOCIATIONS = "StorageGateway_20130630.ListFileSystemAssociations"

    __str__ = str.__str__


XAmzTarget68OrStr: TypeAlias = Annotated[XAmzTarget68 | str, open_enum_validator(XAmzTarget68)]
