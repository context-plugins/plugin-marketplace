from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusTranscriptfetchTranscriptsApi(str, Enum):
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"

    __str__ = str.__str__


StatusTranscriptfetchTranscriptsApiOrStr: TypeAlias = Annotated[
    StatusTranscriptfetchTranscriptsApi | str, open_enum_validator(StatusTranscriptfetchTranscriptsApi)
]
