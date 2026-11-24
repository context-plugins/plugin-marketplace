from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TriggerType(str, Enum):
    PUSH = "PUSH"
    MANUAL = "MANUAL"
    SCHEDULED = "SCHEDULED"
    PARENT_STEP = "PARENT_STEP"

    __str__ = str.__str__


TriggerTypeOrStr: TypeAlias = Annotated[TriggerType | str, open_enum_validator(TriggerType)]
