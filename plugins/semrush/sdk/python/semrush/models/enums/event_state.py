from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventState(int, Enum):
    """State of event processing.
    * 1 - Event has been registered and awaiting processing
    * 2 - Event processing was delayed
    * 3 - Event was processed
    * 4 - Event has nothing to do with
    * 5 - Event processing was blocked by internal rules"""

    VALUE_1 = 1
    VALUE_2 = 2
    VALUE_3 = 3
    VALUE_4 = 4
    VALUE_5 = 5

    __str__ = str.__str__


EventStateOrInt: TypeAlias = Annotated[EventState | int, open_enum_validator(EventState)]
