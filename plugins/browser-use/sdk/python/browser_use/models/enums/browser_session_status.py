from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BrowserSessionStatus(str, Enum):
    """Enumeration of possible browser session states

    Attributes:
        ACTIVE: Session is currently active and running (browser is running)
        STOPPED: Session has been stopped and is no longer active (browser is stopped)"""

    ACTIVE = "active"
    STOPPED = "stopped"

    __str__ = str.__str__


BrowserSessionStatusOrStr: TypeAlias = Annotated[BrowserSessionStatus | str, open_enum_validator(BrowserSessionStatus)]
