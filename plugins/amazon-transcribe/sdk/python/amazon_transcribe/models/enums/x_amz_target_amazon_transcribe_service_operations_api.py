from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonTranscribeServiceOperationsApi(str, Enum):
    TRANSCRIBE_LIST_TAGS_FOR_RESOURCE = "Transcribe.ListTagsForResource"

    __str__ = str.__str__


XAmzTargetAmazonTranscribeServiceOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonTranscribeServiceOperationsApi | str,
    open_enum_validator(XAmzTargetAmazonTranscribeServiceOperationsApi),
]
