from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Source(str, Enum):
    """Where the words came from: an existing caption track, or AI transcription of the audio (billed by length, see
    usage.credits_spent)."""

    CAPTIONS = "captions"
    AUDIO = "audio"

    __str__ = str.__str__


SourceOrStr: TypeAlias = Annotated[Source | str, open_enum_validator(Source)]
