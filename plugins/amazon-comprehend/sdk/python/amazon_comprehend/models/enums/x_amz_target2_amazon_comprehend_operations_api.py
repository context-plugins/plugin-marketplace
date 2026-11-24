from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget2AmazonComprehendOperationsApi(str, Enum):
    COMPREHEND_20171127_DETECT_DOMINANT_LANGUAGE = "Comprehend_20171127.DetectDominantLanguage"

    __str__ = str.__str__


XAmzTarget2AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget2AmazonComprehendOperationsApi | str, open_enum_validator(XAmzTarget2AmazonComprehendOperationsApi)
]
