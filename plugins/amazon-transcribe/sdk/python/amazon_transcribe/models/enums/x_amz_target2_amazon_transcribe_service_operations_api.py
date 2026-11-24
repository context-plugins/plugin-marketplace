from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonTranscribeServiceOperationsApi(str, Enum):
    TRANSCRIBE_UNTAG_RESOURCE = "Transcribe.UntagResource"

    __str__ = str.__str__


XAmzTarget2AmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonTranscribeServiceOperationsApi | str,
    open_enum_validator(XAmzTarget2AmazonTranscribeServiceOperationsApi),
]
