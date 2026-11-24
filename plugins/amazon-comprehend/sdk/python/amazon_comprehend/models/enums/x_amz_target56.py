from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget56(str, Enum):
    COMPREHEND_20171127_DESCRIBE_KEY_PHRASES_DETECTION_JOB = "Comprehend_20171127.DescribeKeyPhrasesDetectionJob"

    __str__ = str.__str__


XAmzTarget56OrStr: TypeAlias = Annotated[XAmzTarget56 | str, open_enum_validator(XAmzTarget56)]
