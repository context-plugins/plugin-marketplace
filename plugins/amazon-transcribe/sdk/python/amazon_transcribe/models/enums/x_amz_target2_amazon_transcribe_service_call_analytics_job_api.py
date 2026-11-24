from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi(str, Enum):
    TRANSCRIBE_LIST_CALL_ANALYTICS_JOBS = "Transcribe.ListCallAnalyticsJobs"

    __str__ = str.__str__


XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi | str,
    open_enum_validator(XAmzTarget2AmazonTranscribeServiceCallAnalyticsJobApi),
]
