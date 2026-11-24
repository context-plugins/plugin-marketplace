from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Destination(str, Enum):
    """Retrieves the current destination."""

    X_RAY = "XRay"
    CLOUD_WATCH_LOGS = "CloudWatchLogs"

    __str__ = str.__str__


DestinationOrStr: TypeAlias = Annotated[Destination | str, open_enum_validator(Destination)]
