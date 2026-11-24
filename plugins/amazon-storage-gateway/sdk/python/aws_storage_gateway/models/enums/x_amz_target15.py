from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget15(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_UPLOAD_BUFFER = "StorageGateway_20130630.DescribeUploadBuffer"

    __str__ = str.__str__


XAmzTarget15OrStr: TypeAlias = Annotated[XAmzTarget15 | str, open_enum_validator(XAmzTarget15)]
