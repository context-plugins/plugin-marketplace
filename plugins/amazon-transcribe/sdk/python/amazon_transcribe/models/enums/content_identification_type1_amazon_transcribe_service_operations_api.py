from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentIdentificationType1AmazonTranscribeServiceOperationsApi(str, Enum):
    """Shows whether content identification was enabled for your transcription."""

    PHI = "PHI"

    __str__ = str.__str__


ContentIdentificationType1AmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    ContentIdentificationType1AmazonTranscribeServiceOperationsApi | str,
    open_enum_validator(ContentIdentificationType1AmazonTranscribeServiceOperationsApi),
]
