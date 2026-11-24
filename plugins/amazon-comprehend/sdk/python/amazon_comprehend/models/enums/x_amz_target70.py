from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget70(str, Enum):
    COMPREHEND_20171127_START_TARGETED_SENTIMENT_DETECTION_JOB = "Comprehend_20171127.StartTargetedSentimentDetectionJob"

    __str__ = str.__str__


XAmzTarget70OrStr: TypeAlias = Annotated[XAmzTarget70 | str, open_enum_validator(XAmzTarget70)]
