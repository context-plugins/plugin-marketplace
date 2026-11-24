from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name3(str, Enum):
    """A category by which the intent analytics were grouped."""

    INTENT_NAME = "IntentName"
    INTENT_END_STATE = "IntentEndState"
    INTENT_LEVEL = "IntentLevel"

    __str__ = str.__str__


Name3OrStr: TypeAlias = Annotated[Name3 | str, open_enum_validator(Name3)]
