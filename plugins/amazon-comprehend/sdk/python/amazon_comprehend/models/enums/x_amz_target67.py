from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget67(str, Enum):
    COMPREHEND_20171127_STOP_SENTIMENT_DETECTION_JOB = "Comprehend_20171127.StopSentimentDetectionJob"

    __str__ = str.__str__


XAmzTarget67OrStr: TypeAlias = Annotated[XAmzTarget67 | str, open_enum_validator(XAmzTarget67)]
