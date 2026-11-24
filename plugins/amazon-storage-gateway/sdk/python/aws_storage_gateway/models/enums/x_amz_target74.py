from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget74(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_TAPE_RECOVERY_POINTS = "StorageGateway_20130630.DescribeTapeRecoveryPoints"

    __str__ = str.__str__


XAmzTarget74OrStr: TypeAlias = Annotated[XAmzTarget74 | str, open_enum_validator(XAmzTarget74)]
