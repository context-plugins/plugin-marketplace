from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget59(str, Enum):
    COMPREHEND_20171127_STOP_KEY_PHRASES_DETECTION_JOB = "Comprehend_20171127.StopKeyPhrasesDetectionJob"

    __str__ = str.__str__


XAmzTarget59OrStr: TypeAlias = Annotated[XAmzTarget59 | str, open_enum_validator(XAmzTarget59)]
