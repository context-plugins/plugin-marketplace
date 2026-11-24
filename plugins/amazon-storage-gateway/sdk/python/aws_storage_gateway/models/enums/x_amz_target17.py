from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget17(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_WORKING_STORAGE = "StorageGateway_20130630.DescribeWorkingStorage"

    __str__ = str.__str__


XAmzTarget17OrStr: TypeAlias = Annotated[XAmzTarget17 | str, open_enum_validator(XAmzTarget17)]
