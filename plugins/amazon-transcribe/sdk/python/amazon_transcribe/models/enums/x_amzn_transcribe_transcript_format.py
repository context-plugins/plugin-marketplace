from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribeTranscriptFormat(str, Enum):
    SPOKEN = "spoken"
    WRITTEN = "written"

    __str__ = str.__str__


XAmznTranscribeTranscriptFormatOrStr: TypeAlias = Annotated[
    XAmznTranscribeTranscriptFormat | str, open_enum_validator(XAmznTranscribeTranscriptFormat)
]
