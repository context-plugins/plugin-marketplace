from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget48(str, Enum):
    COMPREHEND_20171127_START_ENTITIES_DETECTION_JOB = "Comprehend_20171127.StartEntitiesDetectionJob"

    __str__ = str.__str__


XAmzTarget48OrStr: TypeAlias = Annotated[XAmzTarget48 | str, open_enum_validator(XAmzTarget48)]
