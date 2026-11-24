from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BrowserSessionStatus2(str, Enum):
    """Current status of the session (active/stopped)"""

    ACTIVE = "active"
    STOPPED = "stopped"

    __str__ = str.__str__


BrowserSessionStatus2OrStr: TypeAlias = Annotated[
    BrowserSessionStatus2 | str, open_enum_validator(BrowserSessionStatus2)
]
