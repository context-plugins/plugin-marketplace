from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusBundleSocialAppApi(str, Enum):
    OPERATIONAL = "operational"
    DEGRADED = "degraded"
    OUTAGE = "outage"
    MAINTENANCE = "maintenance"

    __str__ = str.__str__


StatusBundleSocialAppApiOrStr: TypeAlias = Annotated[
    StatusBundleSocialAppApi | str, open_enum_validator(StatusBundleSocialAppApi)
]
