from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InteractionType(str, Enum):
    """The use case most closely describing the audio content to be recognized."""

    INTERACTION_TYPE_UNSPECIFIED = "INTERACTION_TYPE_UNSPECIFIED"
    DISCUSSION = "DISCUSSION"
    PRESENTATION = "PRESENTATION"
    PHONE_CALL = "PHONE_CALL"
    VOICEMAIL = "VOICEMAIL"
    PROFESSIONALLY_PRODUCED = "PROFESSIONALLY_PRODUCED"
    VOICE_SEARCH = "VOICE_SEARCH"
    VOICE_COMMAND = "VOICE_COMMAND"
    DICTATION = "DICTATION"

    __str__ = str.__str__


InteractionTypeOrStr: TypeAlias = Annotated[InteractionType | str, open_enum_validator(InteractionType)]
