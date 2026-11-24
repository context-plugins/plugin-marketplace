from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConversationMode(str, Enum):
    """The conversation type that you are using the Amazon Lex V2. If the conversation mode is AUDIO you can send both
    audio and DTMF information. If the mode is TEXT you can only send text."""

    AUDIO = "AUDIO"
    TEXT = "TEXT"

    __str__ = str.__str__


ConversationModeOrStr: TypeAlias = Annotated[ConversationMode | str, open_enum_validator(ConversationMode)]
