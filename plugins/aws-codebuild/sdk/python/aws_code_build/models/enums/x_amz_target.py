from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmzTarget(str, Enum):
    CODE_BUILD_20161006_START_SANDBOX = "CodeBuild_20161006.StartSandbox"

    __str__ = str.__str__


XAmzTargetOrStr: TypeAlias = Annotated[XAmzTarget | str, open_enum_validator(XAmzTarget)]
