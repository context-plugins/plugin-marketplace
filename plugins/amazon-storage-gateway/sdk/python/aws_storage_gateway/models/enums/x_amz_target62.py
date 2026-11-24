from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget62(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_TAPE_ARCHIVES = "StorageGateway_20130630.DescribeTapeArchives"

    __str__ = str.__str__


XAmzTarget62OrStr: TypeAlias = Annotated[XAmzTarget62 | str, open_enum_validator(XAmzTarget62)]
