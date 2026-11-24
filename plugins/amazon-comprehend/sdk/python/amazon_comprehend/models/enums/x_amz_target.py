from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget(str, Enum):
    COMPREHEND_20171127_BATCH_DETECT_DOMINANT_LANGUAGE = "Comprehend_20171127.BatchDetectDominantLanguage"

    __str__ = str.__str__


XAmzTargetOrStr: TypeAlias = Annotated[XAmzTarget | str, open_enum_validator(XAmzTarget)]
