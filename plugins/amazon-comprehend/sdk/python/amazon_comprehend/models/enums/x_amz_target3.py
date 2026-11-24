from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3(str, Enum):
    COMPREHEND_20171127_BATCH_DETECT_SENTIMENT = "Comprehend_20171127.BatchDetectSentiment"

    __str__ = str.__str__


XAmzTarget3OrStr: TypeAlias = Annotated[XAmzTarget3 | str, open_enum_validator(XAmzTarget3)]
