from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget47(str, Enum):
    COMPREHEND_20171127_LIST_ENTITIES_DETECTION_JOBS = "Comprehend_20171127.ListEntitiesDetectionJobs"

    __str__ = str.__str__


XAmzTarget47OrStr: TypeAlias = Annotated[XAmzTarget47 | str, open_enum_validator(XAmzTarget47)]
