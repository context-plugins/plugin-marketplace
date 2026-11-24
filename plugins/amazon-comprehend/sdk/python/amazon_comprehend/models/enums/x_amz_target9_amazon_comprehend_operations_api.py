from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget9AmazonComprehendOperationsApi(str, Enum):
    COMPREHEND_20171127_DETECT_TOXIC_CONTENT = "Comprehend_20171127.DetectToxicContent"

    __str__ = str.__str__


XAmzTarget9AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget9AmazonComprehendOperationsApi | str, open_enum_validator(XAmzTarget9AmazonComprehendOperationsApi)
]
