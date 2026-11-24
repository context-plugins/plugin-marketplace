from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget74(str, Enum):
    COMPREHEND_20171127_START_TOPICS_DETECTION_JOB = "Comprehend_20171127.StartTopicsDetectionJob"

    __str__ = str.__str__


XAmzTarget74OrStr: TypeAlias = Annotated[XAmzTarget74 | str, open_enum_validator(XAmzTarget74)]
