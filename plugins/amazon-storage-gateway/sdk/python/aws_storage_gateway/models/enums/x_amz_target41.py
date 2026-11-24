from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget41(str, Enum):
    STORAGE_GATEWAY_20130630_DELETE_TAPE = "StorageGateway_20130630.DeleteTape"

    __str__ = str.__str__


XAmzTarget41OrStr: TypeAlias = Annotated[XAmzTarget41 | str, open_enum_validator(XAmzTarget41)]
