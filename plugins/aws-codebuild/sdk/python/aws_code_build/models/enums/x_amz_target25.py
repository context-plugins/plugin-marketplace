from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget25(str, Enum):
    CODE_BUILD_20161006_PUT_RESOURCE_POLICY = "CodeBuild_20161006.PutResourcePolicy"

    __str__ = str.__str__


XAmzTarget25OrStr: TypeAlias = Annotated[XAmzTarget25 | str, open_enum_validator(XAmzTarget25)]
