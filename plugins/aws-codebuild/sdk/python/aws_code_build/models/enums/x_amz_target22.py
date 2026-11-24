from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget22(str, Enum):
    CODE_BUILD_20161006_STOP_BUILD_BATCH = "CodeBuild_20161006.StopBuildBatch"

    __str__ = str.__str__


XAmzTarget22OrStr: TypeAlias = Annotated[XAmzTarget22 | str, open_enum_validator(XAmzTarget22)]
