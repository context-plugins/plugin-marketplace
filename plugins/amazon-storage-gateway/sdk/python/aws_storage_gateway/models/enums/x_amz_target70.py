from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget70(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_GATEWAY_INFORMATION = "StorageGateway_20130630.UpdateGatewayInformation"

    __str__ = str.__str__


XAmzTarget70OrStr: TypeAlias = Annotated[XAmzTarget70 | str, open_enum_validator(XAmzTarget70)]
