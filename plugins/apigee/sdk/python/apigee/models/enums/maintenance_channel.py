from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MaintenanceChannel(str, Enum):
    """Optional. Maintenance channel to specify relative scheduling for maintenance."""

    MAINTENANCE_CHANNEL_UNSPECIFIED = "MAINTENANCE_CHANNEL_UNSPECIFIED"
    WEEK1 = "WEEK1"
    WEEK2 = "WEEK2"

    __str__ = str.__str__


MaintenanceChannelOrStr: TypeAlias = Annotated[MaintenanceChannel | str, open_enum_validator(MaintenanceChannel)]
