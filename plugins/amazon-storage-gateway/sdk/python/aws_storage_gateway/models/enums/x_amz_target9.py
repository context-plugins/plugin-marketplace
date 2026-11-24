from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget9(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_CACHE = "StorageGateway_20130630.DescribeCache"

    __str__ = str.__str__


XAmzTarget9OrStr: TypeAlias = Annotated[XAmzTarget9 | str, open_enum_validator(XAmzTarget9)]
