from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget14(str, Enum):
    STORAGE_GATEWAY_20130630_ADD_UPLOAD_BUFFER = "StorageGateway_20130630.AddUploadBuffer"

    __str__ = str.__str__


XAmzTarget14OrStr: TypeAlias = Annotated[XAmzTarget14 | str, open_enum_validator(XAmzTarget14)]
