from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget20(str, Enum):
    STORAGE_GATEWAY_20130630_ATTACH_VOLUME = "StorageGateway_20130630.AttachVolume"

    __str__ = str.__str__


XAmzTarget20OrStr: TypeAlias = Annotated[XAmzTarget20 | str, open_enum_validator(XAmzTarget20)]
