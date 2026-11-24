from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget38(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_TAPE_POOLS = "StorageGateway_20130630.ListTapePools"

    __str__ = str.__str__


XAmzTarget38OrStr: TypeAlias = Annotated[XAmzTarget38 | str, open_enum_validator(XAmzTarget38)]
