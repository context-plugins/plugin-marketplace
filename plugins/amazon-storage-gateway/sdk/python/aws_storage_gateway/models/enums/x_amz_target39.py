from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget39(str, Enum):
    STORAGE_GATEWAY_20130630_CREATE_TAPES = "StorageGateway_20130630.CreateTapes"

    __str__ = str.__str__


XAmzTarget39OrStr: TypeAlias = Annotated[XAmzTarget39 | str, open_enum_validator(XAmzTarget39)]
