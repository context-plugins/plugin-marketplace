from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget54(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_FILE_SHARES = "StorageGateway_20130630.ListFileShares"

    __str__ = str.__str__


XAmzTarget54OrStr: TypeAlias = Annotated[XAmzTarget54 | str, open_enum_validator(XAmzTarget54)]
