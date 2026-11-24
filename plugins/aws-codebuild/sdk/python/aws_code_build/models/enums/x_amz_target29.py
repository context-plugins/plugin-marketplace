from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget29(str, Enum):
    CODE_BUILD_20161006_DESCRIBE_CODE_COVERAGES = "CodeBuild_20161006.DescribeCodeCoverages"

    __str__ = str.__str__


XAmzTarget29OrStr: TypeAlias = Annotated[XAmzTarget29 | str, open_enum_validator(XAmzTarget29)]
