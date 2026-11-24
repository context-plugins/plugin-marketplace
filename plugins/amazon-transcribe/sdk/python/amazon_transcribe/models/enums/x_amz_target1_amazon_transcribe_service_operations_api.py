from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonTranscribeServiceOperationsApi(str, Enum):
    TRANSCRIBE_TAG_RESOURCE = "Transcribe.TagResource"

    __str__ = str.__str__


XAmzTarget1AmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonTranscribeServiceOperationsApi | str,
    open_enum_validator(XAmzTarget1AmazonTranscribeServiceOperationsApi),
]
