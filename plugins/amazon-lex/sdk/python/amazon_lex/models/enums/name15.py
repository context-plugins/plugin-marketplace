from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name15(str, Enum):
    """Specifies whether to group the session by their end state or their locale."""

    CONVERSATION_END_STATE = "ConversationEndState"
    LOCALE_ID = "LocaleId"

    __str__ = str.__str__


Name15OrStr: TypeAlias = Annotated[Name15 | str, open_enum_validator(Name15)]
