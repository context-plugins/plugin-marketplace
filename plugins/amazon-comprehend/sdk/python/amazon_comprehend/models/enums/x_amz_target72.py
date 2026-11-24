from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget72(str, Enum):
    COMPREHEND_20171127_DESCRIBE_TOPICS_DETECTION_JOB = "Comprehend_20171127.DescribeTopicsDetectionJob"

    __str__ = str.__str__


XAmzTarget72OrStr: TypeAlias = Annotated[XAmzTarget72 | str, open_enum_validator(XAmzTarget72)]
