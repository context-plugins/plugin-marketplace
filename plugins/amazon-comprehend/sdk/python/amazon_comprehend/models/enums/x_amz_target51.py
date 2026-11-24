from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget51(str, Enum):
    COMPREHEND_20171127_LIST_EVENTS_DETECTION_JOBS = "Comprehend_20171127.ListEventsDetectionJobs"

    __str__ = str.__str__


XAmzTarget51OrStr: TypeAlias = Annotated[XAmzTarget51 | str, open_enum_validator(XAmzTarget51)]
