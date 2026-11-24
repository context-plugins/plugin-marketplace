from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget85(str, Enum):
    STORAGE_GATEWAY_20130630_UPDATE_VTL_DEVICE_TYPE = "StorageGateway_20130630.UpdateVTLDeviceType"

    __str__ = str.__str__


XAmzTarget85OrStr: TypeAlias = Annotated[XAmzTarget85 | str, open_enum_validator(XAmzTarget85)]
