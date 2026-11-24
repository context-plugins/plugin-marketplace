from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MonitorLevel(str, Enum):
    """Whether the anomaly was detected on a single SKU (``sku``) or at the level of a whole service (``service``)."""

    SERVICE = "service"
    SKU = "sku"

    __str__ = str.__str__


MonitorLevelOrStr: TypeAlias = Annotated[MonitorLevel | str, open_enum_validator(MonitorLevel)]
