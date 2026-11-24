from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget5AmazonComprehendOperationsApi(str, Enum):
    COMPREHEND_20171127_DETECT_PII_ENTITIES = "Comprehend_20171127.DetectPiiEntities"

    __str__ = str.__str__


XAmzTarget5AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget5AmazonComprehendOperationsApi | str, open_enum_validator(XAmzTarget5AmazonComprehendOperationsApi)
]
