from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Destination2(str, Enum):
    """The configured destination of trace segments."""

    X_RAY = "XRay"
    CLOUD_WATCH_LOGS = "CloudWatchLogs"

    __str__ = str.__str__


Destination2OrStr: TypeAlias = Annotated[Destination2 | str, open_enum_validator(Destination2)]
