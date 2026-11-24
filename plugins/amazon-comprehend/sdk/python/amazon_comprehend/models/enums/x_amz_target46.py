from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget46(str, Enum):
    COMPREHEND_20171127_DESCRIBE_ENTITIES_DETECTION_JOB = "Comprehend_20171127.DescribeEntitiesDetectionJob"

    __str__ = str.__str__


XAmzTarget46OrStr: TypeAlias = Annotated[XAmzTarget46 | str, open_enum_validator(XAmzTarget46)]
