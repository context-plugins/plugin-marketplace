from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget45(str, Enum):
    COMPREHEND_20171127_STOP_DOMINANT_LANGUAGE_DETECTION_JOB = "Comprehend_20171127.StopDominantLanguageDetectionJob"

    __str__ = str.__str__


XAmzTarget45OrStr: TypeAlias = Annotated[XAmzTarget45 | str, open_enum_validator(XAmzTarget45)]
