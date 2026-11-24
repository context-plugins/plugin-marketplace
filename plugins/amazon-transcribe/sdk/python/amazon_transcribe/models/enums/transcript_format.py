from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TranscriptFormat(str, Enum):
    """Provides the transcript format that you specified in your request."""

    SPOKEN = "spoken"
    WRITTEN = "written"

    __str__ = str.__str__


TranscriptFormatOrStr: TypeAlias = Annotated[TranscriptFormat | str, open_enum_validator(TranscriptFormat)]
