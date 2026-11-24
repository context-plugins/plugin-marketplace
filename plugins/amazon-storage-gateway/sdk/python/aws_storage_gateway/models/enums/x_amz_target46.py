from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget46(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_AUTOMATIC_TAPE_CREATION_POLICY = "StorageGateway_20130630.UpdateAutomaticTapeCreationPolicy"

    __str__ = str.__str__


XAmzTarget46OrStr: TypeAlias = Annotated[XAmzTarget46 | str, open_enum_validator(XAmzTarget46)]
