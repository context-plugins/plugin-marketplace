from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget37(str, Enum):
    COMPREHEND_20171127_DESCRIBE_RESOURCE_POLICY = "Comprehend_20171127.DescribeResourcePolicy"

    __str__ = str.__str__


XAmzTarget37OrStr: TypeAlias = Annotated[XAmzTarget37 | str, open_enum_validator(XAmzTarget37)]
