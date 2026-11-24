from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi(str, Enum):
    TRANSCRIBE_DELETE_CALL_ANALYTICS_JOB = "Transcribe.DeleteCallAnalyticsJob"

    __str__ = str.__str__


XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi | str,
    open_enum_validator(XAmzTargetAmazonTranscribeServiceCallAnalyticsJobApi),
]
