from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EventReason(str, Enum):
    """Indicates the type of user input that Amazon Lex V2 detected."""

    DTMF_START_DETECTED = "DTMF_START_DETECTED"
    TEXT_DETECTED = "TEXT_DETECTED"
    VOICE_START_DETECTED = "VOICE_START_DETECTED"

    __str__ = str.__str__


EventReasonOrStr: TypeAlias = Annotated[EventReason | str, open_enum_validator(EventReason)]
