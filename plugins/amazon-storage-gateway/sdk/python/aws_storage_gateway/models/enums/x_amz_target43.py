from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget43(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_TAPES = "StorageGateway_20130630.ListTapes"

    __str__ = str.__str__


XAmzTarget43OrStr: TypeAlias = Annotated[XAmzTarget43 | str, open_enum_validator(XAmzTarget43)]
