from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget14(str, Enum):
    COMPREHEND_20171127_DETECT_TARGETED_SENTIMENT = "Comprehend_20171127.DetectTargetedSentiment"

    __str__ = str.__str__


XAmzTarget14OrStr: TypeAlias = Annotated[XAmzTarget14 | str, open_enum_validator(XAmzTarget14)]
