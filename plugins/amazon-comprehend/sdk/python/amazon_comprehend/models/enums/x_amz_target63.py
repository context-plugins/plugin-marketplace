from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget63(str, Enum):
    COMPREHEND_20171127_STOP_PII_ENTITIES_DETECTION_JOB = "Comprehend_20171127.StopPiiEntitiesDetectionJob"

    __str__ = str.__str__


XAmzTarget63OrStr: TypeAlias = Annotated[XAmzTarget63 | str, open_enum_validator(XAmzTarget63)]
