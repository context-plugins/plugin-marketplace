from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name1(str, Enum):
    """The name of the toxic content type."""

    GRAPHIC = "GRAPHIC"
    HARASSMENT_OR_ABUSE = "HARASSMENT_OR_ABUSE"
    HATE_SPEECH = "HATE_SPEECH"
    INSULT = "INSULT"
    PROFANITY = "PROFANITY"
    SEXUAL = "SEXUAL"
    VIOLENCE_OR_THREAT = "VIOLENCE_OR_THREAT"

    __str__ = str.__str__


Name1OrStr: TypeAlias = Annotated[Name1 | str, open_enum_validator(Name1)]
