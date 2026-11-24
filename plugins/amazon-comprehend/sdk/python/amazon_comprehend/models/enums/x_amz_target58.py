from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget58(str, Enum):
    COMPREHEND_20171127_START_KEY_PHRASES_DETECTION_JOB = "Comprehend_20171127.StartKeyPhrasesDetectionJob"

    __str__ = str.__str__


XAmzTarget58OrStr: TypeAlias = Annotated[XAmzTarget58 | str, open_enum_validator(XAmzTarget58)]
