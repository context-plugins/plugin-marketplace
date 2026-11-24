from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget68(str, Enum):
    COMPREHEND_20171127_DESCRIBE_TARGETED_SENTIMENT_DETECTION_JOB = "Comprehend_20171127.DescribeTargetedSentimentDetectionJob"

    __str__ = str.__str__


XAmzTarget68OrStr: TypeAlias = Annotated[XAmzTarget68 | str, open_enum_validator(XAmzTarget68)]
