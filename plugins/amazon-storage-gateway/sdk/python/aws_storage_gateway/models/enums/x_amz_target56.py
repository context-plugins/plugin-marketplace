from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget56(str, Enum):
    STORAGE_GATEWAY_20130630_DISABLE_GATEWAY = "StorageGateway_20130630.DisableGateway"

    __str__ = str.__str__


XAmzTarget56OrStr: TypeAlias = Annotated[XAmzTarget56 | str, open_enum_validator(XAmzTarget56)]
