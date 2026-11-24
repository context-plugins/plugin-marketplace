from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Indicates whether the input media is a dictation or a conversation, as specified in the
    StartMedicalTranscriptionJob request."""

    CONVERSATION = "CONVERSATION"
    DICTATION = "DICTATION"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
