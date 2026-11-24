from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget57(str, Enum):
    COMPREHEND_20171127_LIST_KEY_PHRASES_DETECTION_JOBS = "Comprehend_20171127.ListKeyPhrasesDetectionJobs"

    __str__ = str.__str__


XAmzTarget57OrStr: TypeAlias = Annotated[XAmzTarget57 | str, open_enum_validator(XAmzTarget57)]
