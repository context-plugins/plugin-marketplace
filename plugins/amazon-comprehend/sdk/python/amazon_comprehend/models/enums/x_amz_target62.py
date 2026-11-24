from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget62(str, Enum):
    COMPREHEND_20171127_START_PII_ENTITIES_DETECTION_JOB = "Comprehend_20171127.StartPiiEntitiesDetectionJob"

    __str__ = str.__str__


XAmzTarget62OrStr: TypeAlias = Annotated[XAmzTarget62 | str, open_enum_validator(XAmzTarget62)]
