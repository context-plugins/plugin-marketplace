from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name4(str, Enum):
    """Specifies whether to group the intent stages by their name or their end state."""

    INTENT_NAME = "IntentName"
    INTENT_END_STATE = "IntentEndState"
    INTENT_LEVEL = "IntentLevel"

    __str__ = str.__str__


Name4OrStr: TypeAlias = Annotated[Name4 | str, open_enum_validator(Name4)]
