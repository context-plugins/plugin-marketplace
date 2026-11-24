from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget66(str, Enum):
    COMPREHEND_20171127_START_SENTIMENT_DETECTION_JOB = "Comprehend_20171127.StartSentimentDetectionJob"

    __str__ = str.__str__


XAmzTarget66OrStr: TypeAlias = Annotated[XAmzTarget66 | str, open_enum_validator(XAmzTarget66)]
