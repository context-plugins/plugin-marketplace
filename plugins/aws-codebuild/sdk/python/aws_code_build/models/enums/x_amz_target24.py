from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget24(str, Enum):
    CODE_BUILD_20161006_GET_RESOURCE_POLICY = "CodeBuild_20161006.GetResourcePolicy"

    __str__ = str.__str__


XAmzTarget24OrStr: TypeAlias = Annotated[XAmzTarget24 | str, open_enum_validator(XAmzTarget24)]
