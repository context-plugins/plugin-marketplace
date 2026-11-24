from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget44(str, Enum):
    STORAGE_GATEWAY_20130630_DELETE_AUTOMATIC_TAPE_CREATION_POLICY = "StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy"

    __str__ = str.__str__


XAmzTarget44OrStr: TypeAlias = Annotated[XAmzTarget44 | str, open_enum_validator(XAmzTarget44)]
