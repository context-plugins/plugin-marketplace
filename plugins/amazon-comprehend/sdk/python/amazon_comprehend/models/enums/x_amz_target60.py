from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget60(str, Enum):
    COMPREHEND_20171127_DESCRIBE_PII_ENTITIES_DETECTION_JOB = "Comprehend_20171127.DescribePiiEntitiesDetectionJob"

    __str__ = str.__str__


XAmzTarget60OrStr: TypeAlias = Annotated[XAmzTarget60 | str, open_enum_validator(XAmzTarget60)]
