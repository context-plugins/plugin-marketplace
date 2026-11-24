from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget3AmazonComprehendOperationsApi(str, Enum):
    COMPREHEND_20171127_DETECT_ENTITIES = "Comprehend_20171127.DetectEntities"

    __str__ = str.__str__


XAmzTarget3AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget3AmazonComprehendOperationsApi | str, open_enum_validator(XAmzTarget3AmazonComprehendOperationsApi)
]
