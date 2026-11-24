from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget81(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_GATEWAY_SOFTWARE_NOW = "StorageGateway_20130630.UpdateGatewaySoftwareNow"

    __str__ = str.__str__


XAmzTarget81OrStr: TypeAlias = Annotated[XAmzTarget81 | str, open_enum_validator(XAmzTarget81)]
