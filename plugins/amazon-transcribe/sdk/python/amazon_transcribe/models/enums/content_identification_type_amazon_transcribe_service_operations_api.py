from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ContentIdentificationTypeAmazonTranscribeServiceOperationsApi(str, Enum):
    """Shows whether content identification was enabled for your Call Analytics transcription."""

    PII = "PII"

    __str__ = str.__str__


ContentIdentificationTypeAmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    ContentIdentificationTypeAmazonTranscribeServiceOperationsApi | str,
    open_enum_validator(ContentIdentificationTypeAmazonTranscribeServiceOperationsApi),
]
