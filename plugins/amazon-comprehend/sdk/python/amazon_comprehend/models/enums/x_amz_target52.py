from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget52(str, Enum):
    COMPREHEND_20171127_START_EVENTS_DETECTION_JOB = "Comprehend_20171127.StartEventsDetectionJob"

    __str__ = str.__str__


XAmzTarget52OrStr: TypeAlias = Annotated[XAmzTarget52 | str, open_enum_validator(XAmzTarget52)]
