from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget42(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_TAPES = "StorageGateway_20130630.DescribeTapes"

    __str__ = str.__str__


XAmzTarget42OrStr: TypeAlias = Annotated[XAmzTarget42 | str, open_enum_validator(XAmzTarget42)]
