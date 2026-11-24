from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget48(str, Enum):
    STORAGE_GATEWAY_20130630_DESCRIBE_BANDWIDTH_RATE_LIMIT = "StorageGateway_20130630.DescribeBandwidthRateLimit"

    __str__ = str.__str__


XAmzTarget48OrStr: TypeAlias = Annotated[XAmzTarget48 | str, open_enum_validator(XAmzTarget48)]
