from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BrowserSessionUpdateAction(str, Enum):
    """Available actions that can be performed on a browser session

    Attributes:
        STOP: Stop the browser session (cannot be undone)"""

    STOP = "stop"

    __str__ = str.__str__


BrowserSessionUpdateActionOrStr: TypeAlias = Annotated[
    BrowserSessionUpdateAction | str, open_enum_validator(BrowserSessionUpdateAction)
]
