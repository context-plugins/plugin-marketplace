from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3(str, Enum):
    STORAGE_GATEWAY_20130630_LIST_GATEWAYS = "StorageGateway_20130630.ListGateways"

    __str__ = str.__str__


XAmzTarget3OrStr: TypeAlias = Annotated[XAmzTarget3 | str, open_enum_validator(XAmzTarget3)]
