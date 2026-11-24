from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type2(str, Enum):
    """Specify whether your input media contains only one person (DICTATION) or contains a conversation between two
    people (CONVERSATION). For example, DICTATION could be used for a medical professional wanting to transcribe voice
    memos; CONVERSATION could be used for transcribing the doctor-patient dialogue during the patient's office visit."""

    CONVERSATION = "CONVERSATION"
    DICTATION = "DICTATION"

    __str__ = str.__str__


Type2OrStr: TypeAlias = Annotated[Type2 | str, open_enum_validator(Type2)]
