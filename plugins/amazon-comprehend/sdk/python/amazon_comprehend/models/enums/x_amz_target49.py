from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget49(str, Enum):
    COMPREHEND_20171127_STOP_ENTITIES_DETECTION_JOB = "Comprehend_20171127.StopEntitiesDetectionJob"

    __str__ = str.__str__


XAmzTarget49OrStr: TypeAlias = Annotated[XAmzTarget49 | str, open_enum_validator(XAmzTarget49)]
