from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget61(str, Enum):
    COMPREHEND_20171127_LIST_PII_ENTITIES_DETECTION_JOBS = "Comprehend_20171127.ListPiiEntitiesDetectionJobs"

    __str__ = str.__str__


XAmzTarget61OrStr: TypeAlias = Annotated[XAmzTarget61 | str, open_enum_validator(XAmzTarget61)]
