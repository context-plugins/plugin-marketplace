from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1(str, Enum):
    COMPREHEND_20171127_BATCH_DETECT_ENTITIES = "Comprehend_20171127.BatchDetectEntities"

    __str__ = str.__str__


XAmzTarget1OrStr: TypeAlias = Annotated[XAmzTarget1 | str, open_enum_validator(XAmzTarget1)]
