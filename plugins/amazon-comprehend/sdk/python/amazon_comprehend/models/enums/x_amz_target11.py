from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget11(str, Enum):
    COMPREHEND_20171127_DETECT_PII_ENTITIES = "Comprehend_20171127.DetectPiiEntities"

    __str__ = str.__str__


XAmzTarget11OrStr: TypeAlias = Annotated[XAmzTarget11 | str, open_enum_validator(XAmzTarget11)]
