from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget53(str, Enum):
    COMPREHEND_20171127_STOP_EVENTS_DETECTION_JOB = "Comprehend_20171127.StopEventsDetectionJob"

    __str__ = str.__str__


XAmzTarget53OrStr: TypeAlias = Annotated[XAmzTarget53 | str, open_enum_validator(XAmzTarget53)]
