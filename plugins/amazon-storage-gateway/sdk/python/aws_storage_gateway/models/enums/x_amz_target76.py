from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget76(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_LOCAL_DISKS = "StorageGateway_20130630.ListLocalDisks"

    __str__ = str.__str__


XAmzTarget76OrStr: TypeAlias = Annotated[XAmzTarget76 | str, open_enum_validator(XAmzTarget76)]
