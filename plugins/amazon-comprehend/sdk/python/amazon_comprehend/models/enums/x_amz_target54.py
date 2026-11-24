from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget54(str, Enum):
    COMPREHEND_20171127_DESCRIBE_FLYWHEEL_ITERATION = "Comprehend_20171127.DescribeFlywheelIteration"

    __str__ = str.__str__


XAmzTarget54OrStr: TypeAlias = Annotated[XAmzTarget54 | str, open_enum_validator(XAmzTarget54)]
