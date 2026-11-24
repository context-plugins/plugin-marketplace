from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Domain1(str, Enum):
    """The domain associated with the dataset group."""

    RETAIL = "RETAIL"
    CUSTOM = "CUSTOM"
    INVENTORY_PLANNING = "INVENTORY_PLANNING"
    EC2_CAPACITY = "EC2_CAPACITY"
    WORK_FORCE = "WORK_FORCE"
    WEB_TRAFFIC = "WEB_TRAFFIC"
    METRICS = "METRICS"

    __str__ = str.__str__


Domain1OrStr: TypeAlias = Annotated[Domain1 | str, open_enum_validator(Domain1)]
