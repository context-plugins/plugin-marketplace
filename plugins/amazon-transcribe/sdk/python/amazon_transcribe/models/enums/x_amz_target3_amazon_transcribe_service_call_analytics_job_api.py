from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi(str, Enum):
    TRANSCRIBE_START_CALL_ANALYTICS_JOB = "Transcribe.StartCallAnalyticsJob"

    __str__ = str.__str__


XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi | str,
    open_enum_validator(XAmzTarget3AmazonTranscribeServiceCallAnalyticsJobApi),
]
