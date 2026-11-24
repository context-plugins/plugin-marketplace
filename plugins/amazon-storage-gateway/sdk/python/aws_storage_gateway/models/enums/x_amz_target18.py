from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget18(str, Enum):
    STORAGE_GATEWAY_20130630_ASSOCIATE_FILE_SYSTEM = "StorageGateway_20130630.AssociateFileSystem"

    __str__ = str.__str__


XAmzTarget18OrStr: TypeAlias = Annotated[XAmzTarget18 | str, open_enum_validator(XAmzTarget18)]
