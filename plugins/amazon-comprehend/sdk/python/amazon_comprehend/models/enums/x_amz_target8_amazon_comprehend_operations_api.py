from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget8AmazonComprehendOperationsApi(str, Enum):
    COMPREHEND_20171127_DETECT_TARGETED_SENTIMENT = "Comprehend_20171127.DetectTargetedSentiment"

    __str__ = str.__str__


XAmzTarget8AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget8AmazonComprehendOperationsApi | str, open_enum_validator(XAmzTarget8AmazonComprehendOperationsApi)
]
