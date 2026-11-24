from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget(str, Enum):
    STORAGE_GATEWAY_20130630_ACTIVATE_GATEWAY = "StorageGateway_20130630.ActivateGateway"

    __str__ = str.__str__


XAmzTargetOrStr: TypeAlias = Annotated[XAmzTarget | str, open_enum_validator(XAmzTarget)]
