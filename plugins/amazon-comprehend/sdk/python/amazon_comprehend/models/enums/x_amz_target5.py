from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5(str, Enum):
    COMPREHEND_20171127_BATCH_DETECT_TARGETED_SENTIMENT = "Comprehend_20171127.BatchDetectTargetedSentiment"

    __str__ = str.__str__


XAmzTarget5OrStr: TypeAlias = Annotated[XAmzTarget5 | str, open_enum_validator(XAmzTarget5)]
