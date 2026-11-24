from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi(str, Enum):
    TRANSCRIBE_GET_CALL_ANALYTICS_JOB = "Transcribe.GetCallAnalyticsJob"

    __str__ = str.__str__


XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi | str,
    open_enum_validator(XAmzTarget1AmazonTranscribeServiceCallAnalyticsJobApi),
]
