from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget73(str, Enum):
    COMPREHEND_20171127_LIST_TOPICS_DETECTION_JOBS = "Comprehend_20171127.ListTopicsDetectionJobs"

    __str__ = str.__str__


XAmzTarget73OrStr: TypeAlias = Annotated[XAmzTarget73 | str, open_enum_validator(XAmzTarget73)]
