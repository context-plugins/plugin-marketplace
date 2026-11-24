from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget71(str, Enum):
    COMPREHEND_20171127_STOP_TARGETED_SENTIMENT_DETECTION_JOB = "Comprehend_20171127.StopTargetedSentimentDetectionJob"

    __str__ = str.__str__


XAmzTarget71OrStr: TypeAlias = Annotated[XAmzTarget71 | str, open_enum_validator(XAmzTarget71)]
