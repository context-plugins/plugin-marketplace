from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget16(str, Enum):
    COMPREHEND_20171127_DESCRIBE_DATASET = "Comprehend_20171127.DescribeDataset"

    __str__ = str.__str__


XAmzTarget16OrStr: TypeAlias = Annotated[XAmzTarget16 | str, open_enum_validator(XAmzTarget16)]
