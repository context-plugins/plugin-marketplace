from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget47(str, Enum):
    STORAGE_GATEWAY_20130630_DELETE_BANDWIDTH_RATE_LIMIT = "StorageGateway_20130630.DeleteBandwidthRateLimit"

    __str__ = str.__str__


XAmzTarget47OrStr: TypeAlias = Annotated[XAmzTarget47 | str, open_enum_validator(XAmzTarget47)]
