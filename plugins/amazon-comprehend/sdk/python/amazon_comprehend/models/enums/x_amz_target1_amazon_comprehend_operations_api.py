from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget1AmazonComprehendOperationsApi(str, Enum):
    COMPREHEND_20171127_CONTAINS_PII_ENTITIES = "Comprehend_20171127.ContainsPiiEntities"

    __str__ = str.__str__


XAmzTarget1AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget1AmazonComprehendOperationsApi | str, open_enum_validator(XAmzTarget1AmazonComprehendOperationsApi)
]
