from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget50(str, Enum):
    COMPREHEND_20171127_DESCRIBE_EVENTS_DETECTION_JOB = "Comprehend_20171127.DescribeEventsDetectionJob"

    __str__ = str.__str__


XAmzTarget50OrStr: TypeAlias = Annotated[XAmzTarget50 | str, open_enum_validator(XAmzTarget50)]
