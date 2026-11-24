from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status2(str, Enum):
    """``live``: we are publishing odds for this venue and sport right now. ``interrupted_24h``: we are not — no rows at
    this instant, or the venue's feed is interrupted now; it was publishing within the last 24 hours, which is why it is
    listed at all."""

    LIVE = "live"
    INTERRUPTED_24H = "interrupted_24h"

    __str__ = str.__str__


Status2OrStr: TypeAlias = Annotated[Status2 | str, open_enum_validator(Status2)]
