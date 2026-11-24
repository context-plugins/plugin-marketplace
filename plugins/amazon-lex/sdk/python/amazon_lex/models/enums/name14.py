from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name14(str, Enum):
    """The category by which the session analytics were grouped."""

    CONVERSATION_END_STATE = "ConversationEndState"
    LOCALE_ID = "LocaleId"

    __str__ = str.__str__


Name14OrStr: TypeAlias = Annotated[Name14 | str, open_enum_validator(Name14)]
