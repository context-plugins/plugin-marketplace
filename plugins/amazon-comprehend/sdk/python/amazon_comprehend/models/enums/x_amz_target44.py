from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget44(str, Enum):
    COMPREHEND_20171127_START_DOMINANT_LANGUAGE_DETECTION_JOB = "Comprehend_20171127.StartDominantLanguageDetectionJob"

    __str__ = str.__str__


XAmzTarget44OrStr: TypeAlias = Annotated[XAmzTarget44 | str, open_enum_validator(XAmzTarget44)]
