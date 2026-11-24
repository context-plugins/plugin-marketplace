from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget23(str, Enum):
    CODE_BUILD_20161006_DELETE_RESOURCE_POLICY = "CodeBuild_20161006.DeleteResourcePolicy"

    __str__ = str.__str__


XAmzTarget23OrStr: TypeAlias = Annotated[XAmzTarget23 | str, open_enum_validator(XAmzTarget23)]
