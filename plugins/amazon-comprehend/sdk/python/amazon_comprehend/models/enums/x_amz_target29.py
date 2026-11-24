from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget29(str, Enum):
    COMPREHEND_20171127_DESCRIBE_ENTITY_RECOGNIZER = "Comprehend_20171127.DescribeEntityRecognizer"

    __str__ = str.__str__


XAmzTarget29OrStr: TypeAlias = Annotated[XAmzTarget29 | str, open_enum_validator(XAmzTarget29)]
