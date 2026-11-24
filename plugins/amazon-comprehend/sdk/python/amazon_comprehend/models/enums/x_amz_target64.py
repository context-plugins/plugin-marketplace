from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget64(str, Enum):
    COMPREHEND_20171127_DESCRIBE_SENTIMENT_DETECTION_JOB = "Comprehend_20171127.DescribeSentimentDetectionJob"

    __str__ = str.__str__


XAmzTarget64OrStr: TypeAlias = Annotated[XAmzTarget64 | str, open_enum_validator(XAmzTarget64)]
