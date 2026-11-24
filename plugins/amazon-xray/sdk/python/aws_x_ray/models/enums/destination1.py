from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Destination1(str, Enum):
    """The destination of the trace segments."""

    X_RAY = "XRay"
    CLOUD_WATCH_LOGS = "CloudWatchLogs"

    __str__ = str.__str__


Destination1OrStr: TypeAlias = Annotated[Destination1 | str, open_enum_validator(Destination1)]
