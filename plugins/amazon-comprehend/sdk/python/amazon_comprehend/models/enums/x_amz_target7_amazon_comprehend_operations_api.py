from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget7AmazonComprehendOperationsApi(str, Enum):
    COMPREHEND_20171127_DETECT_SYNTAX = "Comprehend_20171127.DetectSyntax"

    __str__ = str.__str__


XAmzTarget7AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget7AmazonComprehendOperationsApi | str, open_enum_validator(XAmzTarget7AmazonComprehendOperationsApi)
]
