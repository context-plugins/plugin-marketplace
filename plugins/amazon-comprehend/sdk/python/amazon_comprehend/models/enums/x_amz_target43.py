from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget43(str, Enum):
    COMPREHEND_20171127_LIST_DOMINANT_LANGUAGE_DETECTION_JOBS = "Comprehend_20171127.ListDominantLanguageDetectionJobs"

    __str__ = str.__str__


XAmzTarget43OrStr: TypeAlias = Annotated[XAmzTarget43 | str, open_enum_validator(XAmzTarget43)]
