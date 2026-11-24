from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget19(str, Enum):
    STORAGE_GATEWAY_20130630_DISASSOCIATE_FILE_SYSTEM = "StorageGateway_20130630.DisassociateFileSystem"

    __str__ = str.__str__


XAmzTarget19OrStr: TypeAlias = Annotated[XAmzTarget19 | str, open_enum_validator(XAmzTarget19)]
