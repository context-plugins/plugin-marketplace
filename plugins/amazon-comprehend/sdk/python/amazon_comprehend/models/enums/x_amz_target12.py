from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget12(str, Enum):
    COMPREHEND_20171127_DETECT_SENTIMENT = "Comprehend_20171127.DetectSentiment"

    __str__ = str.__str__


XAmzTarget12OrStr: TypeAlias = Annotated[XAmzTarget12 | str, open_enum_validator(XAmzTarget12)]
