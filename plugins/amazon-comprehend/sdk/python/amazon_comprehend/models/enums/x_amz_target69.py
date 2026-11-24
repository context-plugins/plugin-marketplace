from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget69(str, Enum):
    COMPREHEND_20171127_LIST_TARGETED_SENTIMENT_DETECTION_JOBS = "Comprehend_20171127.ListTargetedSentimentDetectionJobs"

    __str__ = str.__str__


XAmzTarget69OrStr: TypeAlias = Annotated[XAmzTarget69 | str, open_enum_validator(XAmzTarget69)]
