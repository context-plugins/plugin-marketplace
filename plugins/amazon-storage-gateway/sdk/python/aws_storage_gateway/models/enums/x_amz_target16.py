from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget16(str, Enum):
    STORAGE_GATEWAY_20130630_ADD_WORKING_STORAGE = "StorageGateway_20130630.AddWorkingStorage"

    __str__ = str.__str__


XAmzTarget16OrStr: TypeAlias = Annotated[XAmzTarget16 | str, open_enum_validator(XAmzTarget16)]
