from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget4AmazonComprehendOperationsApi(str, Enum):
    COMPREHEND_20171127_DETECT_KEY_PHRASES = "Comprehend_20171127.DetectKeyPhrases"

    __str__ = str.__str__


XAmzTarget4AmazonComprehendOperationsApiOrStr: TypeAlias = Annotated[
    XAmzTarget4AmazonComprehendOperationsApi | str, open_enum_validator(XAmzTarget4AmazonComprehendOperationsApi)
]
