from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget30(str, Enum):
    CODE_BUILD_20161006_DESCRIBE_TEST_CASES = "CodeBuild_20161006.DescribeTestCases"

    __str__ = str.__str__


XAmzTarget30OrStr: TypeAlias = Annotated[XAmzTarget30 | str, open_enum_validator(XAmzTarget30)]
