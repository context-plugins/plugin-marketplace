from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget6AmazonComprehendOperationsApi(str, Enum):
    COMPREHEND_20171127_DETECT_SENTIMENT = "Comprehend_20171127.DetectSentiment"

    __str__ = str.__str__


XAmzTarget6AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget6AmazonComprehendOperationsApi | str, open_enum_validator(XAmzTarget6AmazonComprehendOperationsApi)
]
