from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget65(str, Enum):
    COMPREHEND_20171127_LIST_SENTIMENT_DETECTION_JOBS = "Comprehend_20171127.ListSentimentDetectionJobs"

    __str__ = str.__str__


XAmzTarget65OrStr: TypeAlias = Annotated[XAmzTarget65 | str, open_enum_validator(XAmzTarget65)]
