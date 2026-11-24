from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TriggerType(str, Enum):
    """Trigger type for each leg of the order"""

    ABOVE = "ABOVE"
    BELOW = "BELOW"
    IMMEDIATE = "IMMEDIATE"

    __str__ = str.__str__


TriggerTypeOrStr: TypeAlias = Annotated[TriggerType | str, open_enum_validator(TriggerType)]
