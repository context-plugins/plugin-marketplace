from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTargetAmazonComprehendOperationsApi(str, Enum):
    COMPREHEND_20171127_CLASSIFY_DOCUMENT = "Comprehend_20171127.ClassifyDocument"

    __str__ = str.__str__


XAmzTargetAmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTargetAmazonComprehendOperationsApi | str, open_enum_validator(XAmzTargetAmazonComprehendOperationsApi)
]
